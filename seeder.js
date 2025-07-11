const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const User = require('./models/User');
require('dotenv').config();

// Sample users data
const sampleUsers = [
  {
    name: 'Admin User',
    email: 'admin@example.com',
    password: 'admin123',
    role: 'admin'
  },
  {
    name: 'John Doe',
    email: 'john@example.com',
    password: 'password123',
    role: 'user'
  },
  {
    name: 'Jane Smith',
    email: 'jane@example.com',
    password: 'password123',
    role: 'user'
  },
  {
    name: 'Mike Johnson',
    email: 'mike@example.com',
    password: 'password123',
    role: 'user'
  },
  {
    name: 'Sarah Wilson',
    email: 'sarah@example.com',
    password: 'password123',
    role: 'moderator'
  }
];

// Connect to MongoDB
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost:27017/jwt-auth');
    console.log('✅ MongoDB connected successfully');
  } catch (error) {
    console.error('❌ MongoDB connection error:', error.message);
    process.exit(1);
  }
};

// Hash password function
const hashPassword = async (password) => {
  const saltRounds = 10;
  return await bcrypt.hash(password, saltRounds);
};

// Seed users function
const seedUsers = async () => {
  try {
    console.log('🌱 Starting user seeding process...');
    
    // Clear existing users (optional)
    const clearExisting = process.argv.includes('--clear');
    if (clearExisting) {
      await User.deleteMany({});
      console.log('🗑️  Cleared existing users');
    }

    // Check if users already exist
    const existingUsers = await User.find({});
    if (existingUsers.length > 0 && !clearExisting) {
      console.log('⚠️  Users already exist. Use --clear flag to replace them.');
      console.log(`📊 Current user count: ${existingUsers.length}`);
      return;
    }

    // Create users with hashed passwords
    const users = [];
    for (const userData of sampleUsers) {
      const hashedPassword = await hashPassword(userData.password);
      users.push({
        ...userData,
        password: hashedPassword
      });
    }

    // Insert users into database
    const createdUsers = await User.insertMany(users);
    
    console.log(`✅ Successfully seeded ${createdUsers.length} users!`);
    console.log('\n📋 Created Users:');
    console.log('┌─────────────────────┬───────────────────────┬──────────────┐');
    console.log('│ Name                │ Email                 │ Role         │');
    console.log('├─────────────────────┼───────────────────────┼──────────────┤');
    
    createdUsers.forEach(user => {
      const name = user.name.padEnd(19);
      const email = user.email.padEnd(21);
      const role = (user.role || 'user').padEnd(12);
      console.log(`│ ${name} │ ${email} │ ${role} │`);
    });
    
    console.log('└─────────────────────┴───────────────────────┴──────────────┘');
    console.log('\n🔑 Default password for all users: password123 (admin: admin123)');
    
  } catch (error) {
    console.error('❌ Error seeding users:', error.message);
  }
};

// Display users function
const displayUsers = async () => {
  try {
    const users = await User.find({}).select('-password');
    
    console.log('👥 Current Users in Database:');
    console.log('┌─────────────────────┬───────────────────────┬──────────────┬─────────────────────┐');
    console.log('│ Name                │ Email                 │ Role         │ Created At          │');
    console.log('├─────────────────────┼───────────────────────┼──────────────┼─────────────────────┤');
    
    users.forEach(user => {
      const name = user.name.padEnd(19);
      const email = user.email.padEnd(21);
      const role = (user.role || 'user').padEnd(12);
      const createdAt = user.createdAt.toISOString().split('T')[0].padEnd(19);
      console.log(`│ ${name} │ ${email} │ ${role} │ ${createdAt} │`);
    });
    
    console.log('└─────────────────────┴───────────────────────┴──────────────┴─────────────────────┘');
    console.log(`\n📊 Total users: ${users.length}`);
    
  } catch (error) {
    console.error('❌ Error displaying users:', error.message);
  }
};

// Delete all users function
const clearUsers = async () => {
  try {
    const result = await User.deleteMany({});
    console.log(`🗑️  Deleted ${result.deletedCount} users from database`);
  } catch (error) {
    console.error('❌ Error clearing users:', error.message);
  }
};

// Main function
const main = async () => {
  await connectDB();
  
  const command = process.argv[2];
  
  switch (command) {
    case 'seed':
      await seedUsers();
      break;
    case 'list':
      await displayUsers();
      break;
    case 'clear':
      await clearUsers();
      break;
    case 'reset':
      await clearUsers();
      await seedUsers();
      break;
    default:
      console.log('🚀 JWT Auth Database Seeder');
      console.log('');
      console.log('Available commands:');
      console.log('  seed   - Add sample users to database');
      console.log('  list   - Display all users in database');
      console.log('  clear  - Remove all users from database');
      console.log('  reset  - Clear database and add sample users');
      console.log('');
      console.log('Options:');
      console.log('  --clear - Clear existing users before seeding');
      console.log('');
      console.log('Examples:');
      console.log('  node seeder.js seed');
      console.log('  node seeder.js seed --clear');
      console.log('  node seeder.js list');
      console.log('  node seeder.js reset');
      break;
  }
  
  // Close database connection
  await mongoose.connection.close();
  console.log('🔌 Database connection closed');
};

// Handle process termination
process.on('SIGINT', async () => {
  console.log('\n⚠️  Process interrupted');
  await mongoose.connection.close();
  process.exit(0);
});

// Run the seeder
if (require.main === module) {
  main().catch(error => {
    console.error('💥 Fatal error:', error.message);
    process.exit(1);
  });
}

module.exports = {
  seedUsers,
  displayUsers,
  clearUsers,
  sampleUsers
};
