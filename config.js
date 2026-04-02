/**
 * Global Configuration for WhatsApp MD Bot
 */

module.exports = {
    // Bot Owner Configuration
    ownerNumber: ['91xxxxxxxxxxx','+237 6 94 61 53 82'], // Add your number without + or spaces (e.g., 919876543210)
    ownerName: ['Knight Bot Mini', 'Professor'], // Owner names corresponding to ownerNumber array
    
    // Bot Configuration
    botName: 'Knight Bot Mini',
    prefix: '.',
    sessionName: 'session',
    sessionID: process.env.SESSION_ID || 'KnightBot!H4sIAAAAAAAAA5VU25KiSBT8l3rVGEFuQkRHDCjaiHgDW3RjHkoooJCbVYUKE/77Bvb0zDzszva+FYeKPHky89R3UJSYIhs1QPsOKoKvkKHuyJoKAQ0YdRQhAvoghAwCDbjTyUqiUoRDldnzGV/zQwbHS7OAm9Y7kMTFIuSr3iQfxi/g0QdVfcpw8AfARL8I7UC1vPN+yG0iZ0qRvFxkbaHq2cK7X4/+icx1b9om4gt4dIgQE1zEZpWgHBGY2ahZQ0w+Rx9Zp7twCA/wHpwilIt78Y1rN6m5NiNkq0K2IWlcePNFXTifo6+u/EKIXetgjG54lG6Vm2r5i4Up6/rroOLygtua7RQ6Ph6906c4LlBohahgmDWf1l3W60kU9Q7pscn1Nkic+Xm93keLo97G0vKexbmN5d5Arszz54j3mLIcrhx7f1TldL0ItrEy8nun3iXxb4udPdgtKJHpJOCyze/E1+QjK+f/o3u5Wg13FtNDr7kcuWTyGg/v0GkFUhnLtxgmZMlsxS52jmB+jv69bg43hWz2leVvkbm/0ojo1vTCtTsSqNLuZs3WE9ZcucL8RR+ymvyJpZKkFzZP5EM+CM2ZcxL1+UThb5Kd887cMo5SOyNtQgp6agwj9ba4nlo3eDsnixxdplUa2X6T5BZZrVbpbofqdHBrk/jlOdEZNVYINP7RBwTFmDICGS6LZ00Q+wCGVxcFBLGnvGC7DzPLuzBrIyPsnsSjVOwWh5E9UAenV3w5nOCxTA85JTvnBfRBRcoAUYrCV0xZSRoHUQpjRIH217c+KNCdvRvXtRP4PogwoWxX1FVWwvDD1Y+fMAjKumBuUwTj7oAI0LhfZcQYLmLa6VgXkAQJvqJxAhkFWgQzin5OiAgKgcZIjX5u7bgMO+H3om7IprEEfZA/DcEh0MBQUGRVlHlJGA01/iv9cutQYVV9KRADfZA9b8mqIHM8Lyqyqkqyxn/tyo+f9Dq0EDGIMwo0MF4NDk2z2dzgUGnjw0F3dd3W9U6yj3E+cvGuOyctV+UmgOEQNtnS96TLQFTVcuoYFqGSm6yO1atrHnvtjPsnEKABaXbZODAM8rbkF2IxyoaN+3Z940N/G05qOxGsXuroM6extsOrSIl6mu0tkTq877btJTcCoX0Lm4Q3hpvjDDH6tjLG49tL1y1EVxyg35spS3OgCON1ehxd1PulV+nlPPEtGKmSWYz8PLDTxjwX5Y2gDPltw53OtucvLqKAfWLPo9ywkds7hUwvh9jMxtdtE6a398Q+Nyb78VLhZ5Y6o7rPCKPn4hews+8/jXvn3cWLe/R/g/jxkvzLNhrhyvMu5uusCHNaeW9cD1576wganu7aympXejnccsksoncGHo9vfVBlkEUlyYEGYBGSEoegD0hZd3m1iqj8Q7OxHlt6HLvd4BmkTP+1Ax7OEWUwr4DGK4rEywKnKO+31qSsXiFNgAaEPONTFzz+Bo0LDtRRBwAA',
    newsletterJid: '120363161513685998@newsletter', // Newsletter JID for menu forwarding
    updateZipUrl: 'https://github.com/mruniquehacker/KnightBot-Mini/archive/refs/heads/main.zip', // URL to latest code zip for .update command
    
    // Sticker Configuration
    packname: 'Knight Bot Mini',
    
    // Bot Behavior
    selfMode: false, // Private mode - only owner can use commands
    autoRead: false,
    autoTyping: false,
    autoBio: false,
    autoSticker: false,
    autoReact: false,
    autoReactMode: 'bot', // set bot or all via cmd
    autoDownload: false,
    
    // Group Settings Defaults
    defaultGroupSettings: {
      antilink: false,
      antilinkAction: 'delete', // 'delete', 'kick', 'warn'
      antitag: false,
      antitagAction: 'delete',
      antiall: false, // Owner only - blocks all messages from non-admins
      antiviewonce: false,
      antibot: false,
      anticall: false, // Anti-call feature
      antigroupmention: false, // Anti-group mention feature
      antigroupmentionAction: 'delete', // 'delete', 'kick'
      welcome: false,
      welcomeMessage: '╭╼━≪•𝙽𝙴𝚆 𝙼𝙴𝙼𝙱𝙴𝚁•≫━╾╮\n┃𝚆𝙴𝙻𝙲𝙾𝙼𝙴: @user 👋\n┃Member count: #memberCount\n┃𝚃𝙸𝙼𝙴: time⏰\n╰━━━━━━━━━━━━━━━╯\n\n*@user* Welcome to *@group*! 🎉\n*Group 𝙳𝙴𝚂𝙲𝚁𝙸𝙿𝚃𝙸𝙾𝙽*\ngroupDesc\n\n> *ᴘᴏᴡᴇʀᴇᴅ ʙʏ botName*',
      goodbye: false,
      goodbyeMessage: 'Goodbye @user 👋 We will never miss you!',
      antiSpam: false,
      antidelete: false,
      nsfw: false,
      detect: false,
      chatbot: false,
      autosticker: false // Auto-convert images/videos to stickers
    },
    
    // API Keys (add your own)
    apiKeys: {
      // Add API keys here if needed
      openai: '',
      deepai: '',
      remove_bg: ''
    },
    
    // Message Configuration
    messages: {
      wait: '⏳ Please wait...',
      success: '✅ Success!',
      error: '❌ Error occurred!',
      ownerOnly: '👑 This command is only for bot owner!',
      adminOnly: '🛡️ This command is only for group admins!',
      groupOnly: '👥 This command can only be used in groups!',
      privateOnly: '💬 This command can only be used in private chat!',
      botAdminNeeded: '🤖 Bot needs to be admin to execute this command!',
      invalidCommand: '❓ Invalid command! Type .menu for help'
    },
    
    // Timezone
    timezone: 'Asia/Kolkata',
    
    // Limits
    maxWarnings: 3,
    
    // Social Links (optional)
    social: {
      github: 'https://github.com/mruniquehacker',
      instagram: 'https://instagram.com/yourusername',
      youtube: 'http://youtube.com/@mr_unique_hacker'
    }
};
  
