const appStoreData = [
    // ========== RUNNER GAMES ==========
    {
        title: "Subway Surfers",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/7eI2fAioLdMU9ax2T2Yhq6QkmLzXOgY7IN0LTszR7wQ2wK2dTZFBZR_qzH4SD7fM5w",
        apk: "https://apkvision.org/subway-surfers/",
        rating: 4.5,
        downloads: "1B+",
        description: "DASH as fast as you can! Subway Surfers is an endless runner game full of action and fun."
    },
    {
        title: "Temple Run 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/YyQdZkH51tJhCkzqDQEoOzv_Du1jU71QbSX0dnKnRkGyKQbmQYQZA6xKJ0-yGJgY0Q=w240-h480-rw",
        apk: "https://apkvision.org/temple-run-2/",
        rating: 4.4,
        downloads: "500M+",
        description: "The legendary endless runner is back! Run, slide, jump, and turn to escape the guardians."
    },
    {
        title: "Shadow Fight 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/6eKuvwBC6g2pC1HnPYaNFQNqkGZZ0mTR2KYlMmxny9cT11BSS31a42PJWPGYK3pO2TE=w240-h480-rw",
        apk: "https://apkvision.org/shadow-fight-2/",
        rating: 4.6,
        downloads: "100M+",
        description: "Epic fighting game with RPG elements. Defeat enemies and upgrade your weapons."
    },
    {
        title: "Vector",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/lyzswaQ4v7cnoZAgLbc44M7K5lJ1ovFyTd3ZRqfqQJxXHbDqK9UOpOFqg-35crb2q-w=w240-h480-rw",
        apk: "https://apkvision.org/vector/",
        rating: 4.4,
        downloads: "50M+",
        description: "Parkour action game. Run, jump, and slide through a dystopian world."
    },
    {
        title: "Into the Dead 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/_HQ0APWQbHhC5S3nYVqKWbqLQZgN1xwz9DcHkQzE5qHkPQWz0-QP_3wWg8BqQyQnCg=w240-h480-rw",
        apk: "https://apkvision.org/into-the-dead-2/",
        rating: 4.3,
        downloads: "50M+",
        description: "Survive the zombie apocalypse. Run through hordes of undead."
    },
    {
        title: "Sonic Dash",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/sonic-dash/",
        rating: 4.4,
        downloads: "100M+",
        description: "Run as Sonic the Hedgehog! Dash, jump and spin through stunning 3D environments."
    },
    {
        title: "Minion Rush",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/minion-rush/",
        rating: 4.3,
        downloads: "100M+",
        description: "Despicable Me game! Run, jump, and slide as a Minion."
    },
    {
        title: "Jetpack Joyride",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/jetpack-joyride/",
        rating: 4.6,
        downloads: "100M+",
        description: "Run and fly with a machine gun jetpack! Endless fun action."
    },

    // ========== BATTLE ROYALE & SHOOTER ==========
    {
        title: "Free Fire",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/ZVwZXP5L_h5dMjUJO3LNYyzZMWfYG3kEPH9XNcJ6mK9P4mDPmZtKwOzzEc3x3Yq7P14=w240-h480-rw",
        apk: "https://apkvision.org/garena-free-fire/",
        rating: 4.3,
        downloads: "1B+",
        description: "10-minute survival shooter! 50 players fight for survival on a remote island."
    },
    {
        title: "Free Fire MAX",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/garena-free-fire-max/",
        rating: 4.4,
        downloads: "100M+",
        description: "Enhanced Free Fire experience with better graphics and effects."
    },
    {
        title: "Call of Duty: Mobile",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/L5Caj-6ImK8m7so3QfYdUoHY9kGBwCcaMwOfH8Ps-4wOO0Cs4mO91S5i2HC2bNFfaOw=w240-h480-rw",
        apk: "https://apkvision.org/call-of-duty-mobile/",
        rating: 4.6,
        downloads: "100M+",
        description: "The best FPS on mobile! Play iconic multiplayer maps and battle royale."
    },
    {
        title: "PUBG Mobile",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/IeN_JvP8-NdOjUzQp-4nW7Z6WqIYXj8Q2tXOSlH2Ch_IJ-cbIDpc0QokIfRGOgsWnwI=w240-h480-rw",
        apk: "https://apkvision.org/pubg-mobile/",
        rating: 4.5,
        downloads: "500M+",
        description: "The world's best battle royale! Drop in, loot, and survive to be the last one standing."
    },
    {
        title: "PUBG Mobile Lite",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/pubg-mobile-lite/",
        rating: 4.3,
        downloads: "100M+",
        description: "Lightweight version of PUBG for low-end devices. Same battle royale action."
    },
    {
        title: "Battlelands Royale",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/battlelands-royale/",
        rating: 4.2,
        downloads: "10M+",
        description: "Casual 32-player battle royale. Quick matches, fun gameplay."
    },
    {
        title: "Scopely Battle Royale",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/scopely-battle-royale/",
        rating: 4.1,
        downloads: "5M+",
        description: "Online multiplayer shooter. Fight to be the last one standing."
    },

    // ========== STRATEGY GAMES ==========
    {
        title: "Clash of Clans",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/NSVzGOCJcwkwf-bjGIm98O5MWgVU9oBY6CKmGj4bFFCQdrnN3D3fQ0N41vC8kUROlTE=w240-h480-rw",
        apk: "https://apkvision.org/clash-of-clans/",
        rating: 4.7,
        downloads: "200M+",
        description: "Build your village, lead your clan, battle in epic PvP raids."
    },
    {
        title: "Clash Royale",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/6DZk7C2dE60eFzHZGXx2aN0uGX5nZtfo0kk1_Pn0m0gxpP8rwMjtP7p7WQDvqW7r1YA=w240-h480-rw",
        apk: "https://apkvision.org/clash-royale/",
        rating: 4.6,
        downloads: "100M+",
        description: "Real-time PvP battles with Clash characters. Collect cards and destroy opponent's towers."
    },
    {
        title: "Boom Beach",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/boom-beach/",
        rating: 4.5,
        downloads: "50M+",
        description: "Build your base, attack enemy bases, and explore a tropical archipelago."
    },
    {
        title: "Rise of Kingdoms",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/rise-of-kingdoms/",
        rating: 4.5,
        downloads: "50M+",
        description: "Real-time strategy game. Choose a civilization and lead your empire to victory."
    },
    {
        title: "State of Survival",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/state-of-survival/",
        rating: 4.4,
        downloads: "50M+",
        description: "Zombie survival strategy game. Build your settlement and fight the undead."
    },
    {
        title: "Last Shelter: Survival",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/last-shelter-survival/",
        rating: 4.4,
        downloads: "20M+",
        description: "Build your base, train your army, fight in post-apocalyptic wasteland."
    },
    {
        title: "Mobile Legends: Bang Bang",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/mobile-legends/",
        rating: 4.5,
        downloads: "100M+",
        description: "5v5 MOBA game. Battle against real players in classic MOBA gameplay."
    },
    {
        title: "Arena of Valor",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/arena-of-valor/",
        rating: 4.4,
        downloads: "50M+",
        description: "5v5 MOBA by Tencent. Fast-paced matches with unique heroes."
    },

    // ========== PUZZLE & CASUAL GAMES ==========
    {
        title: "Candy Crush Saga",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/znSPZP_jiH6m8CuqHZ1K89rqR8r9I7sp_3sYv62t5w8B3YXlVtjH5LJ0Cj3pO1lLFGU=w240-h480-rw",
        apk: "https://apkvision.org/candy-crush-saga/",
        rating: 4.6,
        downloads: "1B+",
        description: "The sweetest puzzle game! Match candies and blast through thousands of levels."
    },
    {
        title: "Candy Crush Soda Saga",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/candy-crush-soda-saga/",
        rating: 4.5,
        downloads: "100M+",
        description: "More candy matching fun with purple soda and new game modes."
    },
    {
        title: "Candy Crush Jelly Saga",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/candy-crush-jelly-saga/",
        rating: 4.4,
        downloads: "50M+",
        description: "New matching puzzle with Jelly Queen boss battles."
    },
    {
        title: "Gardenscapes",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/gardenscapes/",
        rating: 4.6,
        downloads: "100M+",
        description: "Match-3 puzzle game with garden restoration storyline."
    },
    {
        title: "Homescapes",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/homescapes/",
        rating: 4.6,
        downloads: "100M+",
        description: "Match-3 puzzle game with house renovation storyline."
    },
    {
        title: "Fishdom",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/fishdom/",
        rating: 4.5,
        downloads: "50M+",
        description: "Match-3 puzzle game with aquarium building and fish."
    },
    {
        title: "Toy Blast",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/toy-blast/",
        rating: 4.6,
        downloads: "50M+",
        description: "Colorful puzzle game. Match cubes and blast through levels."
    },
    {
        title: "Toon Blast",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/toon-blast/",
        rating: 4.5,
        downloads: "50M+",
        description: "Cubic puzzle game with fun cartoon characters."
    },
    {
        title: "Angry Birds 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/angry-birds-2/",
        rating: 4.4,
        downloads: "100M+",
        description: "The classic slingshot game returns with new features and gameplay."
    },
    {
        title: "Angry Birds Dream Blast",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/angry-birds-dream-blast/",
        rating: 4.3,
        downloads: "50M+",
        description: "Bubble popping puzzle game with Angry Birds characters."
    },

    // ========== RACING GAMES ==========
    {
        title: "Asphalt 8: Airborne",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/asphalt-8-airborne/",
        rating: 4.4,
        downloads: "100M+",
        description: "Arcade racing game with over 200 cars and incredible stunts."
    },
    {
        title: "Asphalt 9: Legends",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/01D7qE8WQ1gQ6w3kG_eRL2dpKItXQ7opu6Yl0Y0Md78nIctqXfBKLbc09YI8p_2g6pU=w240-h480-rw",
        apk: "https://apkvision.org/asphalt-9-legends/",
        rating: 4.5,
        downloads: "100M+",
        description: "The best arcade racing game! Drive over 50 cars on hyper-realistic tracks."
    },
    {
        title: "Beach Buggy Racing",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/beach-buggy-racing/",
        rating: 4.3,
        downloads: "50M+",
        description: "Mario Kart style racing game with power-ups and weapons."
    },
    {
        title: "Hill Climb Racing",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/H_su6W0PnbBoY7_mT9A7kf1K2uO6vZeOZRlEmItLJYkCIGWrdjqX9l2MxEq49Bq5sA=w240-h480-rw",
        apk: "https://apkvision.org/hill-climb-racing/",
        rating: 4.4,
        downloads: "500M+",
        description: "Simple physics-based driving game with fun gameplay."
    },
    {
        title: "Hill Climb Racing 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/hill-climb-racing-2/",
        rating: 4.4,
        downloads: "100M+",
        description: "Better graphics, online multiplayer, and more vehicles."
    },
    {
        title: "Real Racing 3",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/real-racing-3/",
        rating: 4.6,
        downloads: "100M+",
        description: "Most realistic racing game on mobile. Real cars, real tracks."
    },
    {
        title: "CSR Racing 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/csr-racing-2/",
        rating: 4.5,
        downloads: "50M+",
        description: "Drag racing game with stunning graphics and real cars."
    },
    {
        title: "Need for Speed: No Limits",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/need-for-speed-no-limits/",
        rating: 4.4,
        downloads: "50M+",
        description: "Official NFS game on mobile. Underground street racing."
    },
    {
        title: "CarX Drift Racing 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/carx-drift-racing-2/",
        rating: 4.6,
        downloads: "10M+",
        description: "Realistic drift physics. Tune your car and master drifting."
    },
    {
        title: "Drift Max",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/drift-max/",
        rating: 4.4,
        downloads: "10M+",
        description: "Addictive car drifting game with stunning graphics."
    },

    // ========== RPG & OPEN WORLD ==========
    {
        title: "Genshin Impact",
        category: "Games",
        icon: "https://upload.wikimedia.org/wikipedia/en/5/5d/Genshin_Impact_logo.svg",
        apk: "https://apkvision.org/genshin-impact/",
        rating: 4.7,
        downloads: "50M+",
        description: "Open-world action RPG. Explore Teyvat, master elements, epic gacha adventure."
    },
    {
        title: "Minecraft",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/VSwHQjcAttxsLE47RuS4PqpC4LT7lCoSjE7Hx5AW_yFnCbQmcvXHSWx9Z7EpQ8GZv4A=w240-h480-rw",
        apk: "https://apkvision.org/minecraft/",
        rating: 4.7,
        downloads: "100M+",
        description: "Create, explore, survive! Build anything you can imagine with infinite blocks."
    },
    {
        title: "Pokémon GO",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/zvHJdMuuuWwFEnE_-1cVCeqbO2gVq17xLkTyXYkfLbqZRLFW5oeSqVYRsONB6tBvXb3I=w240-h480-rw",
        apk: "https://apkvision.org/pokemon-go/",
        rating: 4.3,
        downloads: "100M+",
        description: "Catch Pokémon in the real world! Walk around and discover Pokémon near you."
    },
    {
        title: "Elder Scrolls: Blades",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/elder-scrolls-blades/",
        rating: 4.2,
        downloads: "10M+",
        description: "First-person RPG from Bethesda. Dungeon crawling and town building."
    },
    {
        title: "Raid: Shadow Legends",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/raid-shadow-legends/",
        rating: 4.4,
        downloads: "50M+",
        description: "High fantasy RPG with hundreds of champions to collect."
    },
    {
        title: "Black Desert Mobile",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/black-desert-mobile/",
        rating: 4.5,
        downloads: "10M+",
        description: "MMORPG with stunning graphics and action-packed combat."
    },
    {
        title: "Lineage 2: Revolution",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/lineage-2-revolution/",
        rating: 4.4,
        downloads: "50M+",
        description: "Massive PvP battles in this AAA mobile MMORPG."
    },
    {
        title: "AdventureQuest 3D",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/adventurequest-3d/",
        rating: 4.3,
        downloads: "10M+",
        description: "Cross-platform MMORPG with real-time combat."
    },

    // ========== SPORTS GAMES ==========
    {
        title: "FIFA Soccer",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/fifa-soccer/",
        rating: 4.4,
        downloads: "100M+",
        description: "Official FIFA game. Build your ultimate team and play real matches."
    },
    {
        title: "Dream League Soccer",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/dream-league-soccer/",
        rating: 4.5,
        downloads: "100M+",
        description: "Build your own football team and compete against the world."
    },
    {
        title: "PES 2021",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/pes-2021/",
        rating: 4.5,
        downloads: "100M+",
        description: "Pro Evolution Soccer. Realistic football simulation."
    },
    {
        title: "Bowmasters",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/bowmasters/",
        rating: 4.5,
        downloads: "100M+",
        description: "Fun archery game with ragdoll physics and crazy characters."
    },
    {
        title: "Golf Clash",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/golf-clash/",
        rating: 4.5,
        downloads: "50M+",
        description: "Real-time multiplayer golf game. Play against players worldwide."
    },
    {
        title: "8 Ball Pool",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/BA0yqSQAOajwzX7kgqTjd6oW05rW2rWw_KtJQ9ez_pJwWU97c68LZ1NPlCdhYqRlAA=w240-h480-rw",
        apk: "https://apkvision.org/8-ball-pool/",
        rating: 4.5,
        downloads: "250M+",
        description: "Play pool with millions of players! 8 Ball Pool is the most popular pool game."
    },
    {
        title: "Pool Party",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/pool-party/",
        rating: 4.2,
        downloads: "10M+",
        description: "Fun mini-golf game with unique obstacles."
    },
    {
        title: "Real Cricket 20",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/real-cricket-20/",
        rating: 4.3,
        downloads: "50M+",
        description: "Most realistic cricket game on mobile. Play IPL and World Cup."
    },
    {
        title: "Stickman Cricket",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/stickman-cricket/",
        rating: 4.2,
        downloads: "10M+",
        description: "Fun stickman cricket game with simple controls."
    },

    // ========== SIMULATION GAMES ==========
    {
        title: "The Sims Mobile",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/the-sims-mobile/",
        rating: 4.3,
        downloads: "50M+",
        description: "Create Sims characters, build homes, and control their lives."
    },
    {
        title: "Hay Day",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/hay-day/",
        rating: 4.6,
        downloads: "100M+",
        description: "Farming simulation game. Grow crops, raise animals, and trade."
    },
    {
        title: "Farming Simulator 20",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/farming-simulator-20/",
        rating: 4.4,
        downloads: "10M+",
        description: "Realistic farming simulation with real tractors and machinery."
    },
    {
        title: "Airplane Simulator",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/airplane-simulator/",
        rating: 4.2,
        downloads: "10M+",
        description: "Fly realistic airplanes in this flight simulator."
    },
    {
        title: "Bus Simulator",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/bus-simulator/",
        rating: 4.2,
        downloads: "10M+",
        description: "Drive buses on realistic city routes. Pick up passengers."
    },
    {
        title: "Truck Simulator",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/truck-simulator/",
        rating: 4.1,
        downloads: "10M+",
        description: "Drive huge trucks and deliver cargo across the country."
    },

    // ========== ARCADE CLASSICS ==========
    {
        title: "Crossy Road",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/crossy-road/",
        rating: 4.4,
        downloads: "100M+",
        description: "Chicken crossing game! Dodge traffic, trains, and rivers."
    },
    {
        title: "Fruit Ninja",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/fruit-ninja/",
        rating: 4.3,
        downloads: "100M+",
        description: "Classic fruit slicing game. Slice fruits and avoid bombs."
    },
    {
        title: "Plants vs Zombies 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/plants-vs-zombies-2/",
        rating: 4.4,
        downloads: "100M+",
        description: "Grow plants and defend your home from zombies."
    },
    {
        title: "Cut the Rope",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/cut-the-rope/",
        rating: 4.5,
        downloads: "100M+",
        description: "Puzzle game where you cut ropes to feed candy to Om Nom."
    },
    {
        title: "Bad Piggies",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/bad-piggies/",
        rating: 4.5,
        downloads: "50M+",
        description: "Build vehicles and help pigs reach their destination."
    },
    {
        title: "Where's My Water?",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/wheres-my-water/",
        rating: 4.6,
        downloads: "100M+",
        description: "Puzzle game where you guide water to Swampy the alligator."
    },

    // ========== CARD & BOARD GAMES ==========
    {
        title: "Ludo King",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/ludo-king/",
        rating: 4.5,
        downloads: "500M+",
        description: "Classic Ludo board game. Play online with friends."
    },
    {
        title: "UNO!",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/uno/",
        rating: 4.4,
        downloads: "100M+",
        description: "Official UNO card game. Play with friends online."
    },
    {
        title: "Chess",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/chess/",
        rating: 4.6,
        downloads: "100M+",
        description: "Play chess online. Challenge friends and AI opponents."
    },
    {
        title: "Dominoes",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/dominoes/",
        rating: 4.4,
        downloads: "10M+",
        description: "Classic dominoes game. Play offline or online."
    },
    {
        title: "Solitaire",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/solitaire/",
        rating: 4.5,
        downloads: "50M+",
        description: "Classic Klondike solitaire card game."
    },

    // ========== ACTION ADVENTURE MORE ==========
    {
        title: "Shadow Fight 3",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/shadow-fight-3/",
        rating: 4.5,
        downloads: "50M+",
        description: "3D fighting game with RPG elements. Choose your faction."
    },
    {
        title: "Injustice 2",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/injustice-2/",
        rating: 4.5,
        downloads: "50M+",
        description: "Superhero fighting game. Collect DC heroes and villains."
    },
    {
        title: "Mortal Kombat",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/mortal-kombat/",
        rating: 4.6,
        downloads: "50M+",
        description: "Fighting game with iconic characters and brutal fatalities."
    },
    {
        title: "Street Fighter IV",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/street-fighter-iv/",
        rating: 4.4,
        downloads: "10M+",
        description: "Classic fighting game. Play as Ryu, Chun-Li and more."
    },
    {
        title: "Marvel Contest of Champions",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/marvel-contest-of-champions/",
        rating: 4.5,
        downloads: "50M+",
        description: "Fight with Marvel superheroes. Collect and upgrade characters."
    },

    // ========== MORE POPULAR GAMES ==========
    {
        title: "Roblox",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/roblox/",
        rating: 4.4,
        downloads: "500M+",
        description: "Play millions of games created by users worldwide."
    },
    {
        title: "Rec Room",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/rec-room/",
        rating: 4.4,
        downloads: "50M+",
        description: "Social VR game. Play games, hang out with friends."
    },
    {
        title: "Brawl Stars",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/brawl-stars/",
        rating: 4.5,
        downloads: "100M+",
        description: "3v3 MOBA and battle royale from Supercell."
    },
    {
        title: "Among Us",
        category: "Games",
        icon: "https://upload.wikimedia.org/wikipedia/en/9/9a/Among_Us_cover_art.jpg",
        apk: "https://apkvision.org/among-us/",
        rating: 4.3,
        downloads: "500M+",
        description: "Online multiplayer game of teamwork and betrayal."
    },
    {
        title: "Stumble Guys",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/stumble-guys/",
        rating: 4.4,
        downloads: "100M+",
        description: "Massive multiplayer knockout game like Fall Guys."
    },
    {
        title: "Granny",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/granny/",
        rating: 4.4,
        downloads: "100M+",
        description: "Horror game where you escape from Granny's house."
    },
    {
        title: "Slenderman",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/slenderman/",
        rating: 4.2,
        downloads: "10M+",
        description: "Survival horror game based on the Slenderman legend."
    },
    {
        title: "Poppy Playtime",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/poppy-playtime/",
        rating: 4.3,
        downloads: "10M+",
        description: "Horror puzzle game set in an abandoned toy factory."
    },
    {
        title: "My Talking Tom",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/my-talking-tom/",
        rating: 4.4,
        downloads: "500M+",
        description: "Virtual pet game. Care for Tom and play mini-games."
    },
    {
        title: "My Talking Angela",
        category: "Games",
        icon: "https://play-lh.googleusercontent.com/Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z5Z=w240-h480-rw",
        apk: "https://apkvision.org/my-talking-angela/",
        rating: 4.3,
        downloads: "100M+",
        description: "Virtual pet game with fashion and city adventures."
    }
];
