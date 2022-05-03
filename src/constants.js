export const GAME_LIST = [
	{
    id: 1,
		name: "Grand Theft Auto V",
		price: 250.00,
		cover: "https://static-cdn.jtvnw.net/ttv-boxart/32982_IGDB-285x380.jpg",
		tags: ["Adventure", "FPS"],
    description: "Grand Theft Auto V is a vast open world game set in Los Santos, a sprawling sun-soaked metropolis struggling to stay afloat in an era of economic uncertainty and cheap reality TV. The game blends storytelling and gameplay in new ways as players repeatedly jump in and out of the lives of the game’s three lead characters, playing all sides of the game’s interwoven story."
	},
	{
    id: 2,
		name: "League of Legends",
		price: 0.00,
		cover: "https://static-cdn.jtvnw.net/ttv-boxart/21779-285x380.jpg",
		tags: ["MOBA", "Action"],
    description: "",
	},
	{
    id: 3,
		name: "Counter-Strike: Global Offensive",
		price: 0.00,
		cover: "https://static-cdn.jtvnw.net/ttv-boxart/32399_IGDB-285x380.jpg",
		tags: ["FPS", "Action"],
    description: "",
	},
	{
    id: 4,
		name: "Elden Ring",
		price: 1200.00,
		cover: "https://static-cdn.jtvnw.net/ttv-boxart/512953_IGDB-285x380.jpg",
		tags: ["RPG", "Action"],
    description: "",
	},
  {
    id: 5,
    name: "VALORANT",
    price: 0,
    cover: "https://static-cdn.jtvnw.net/ttv-boxart/516575-285x380.jpg",
    tags: ["Shooter", "FPS"],
    description: "",
  }
];

export const C_CARD_LIST = [
  "1111 2222 3333 4444",
  "2222 3333 4444 5555",
  "3333 4444 5555 6666"
];

export var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
});
