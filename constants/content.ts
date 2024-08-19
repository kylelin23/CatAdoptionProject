export enum Phase {
  Prep = 'Prep',
  AdoptionDay = 'AdoptionDay',
  Week1 = 'Week1',
  Month1 = 'Month1',
};

export enum SubRoom {
  Food = 'Food',
  Litter = 'Litter',
  Toys = 'Toys',
  ScratchingItems = 'ScratchingItems',
  Bedding = 'Bedding',
  Vet = 'Vet',
};

export let content: Record<Phase, Record<SubRoom, string[]>> = {
  Prep: {
    Food: [
      'Cat food comes in dry and wet types. Kittens need more frequent feedings, up to three to four times a day!',
      'Remember to get several water bowl and place around the house to encourage hydration',
      'Yum! Who can resist treats! Pick up some lickable treats to help you bond and socialize with your new cat!',
      'Water fountains are a good idea! The sound of running water may entice your cat to drink more!',      
    ],
    Litter: [
      'There are different types of litter. The most common is clumping clay litter.',
      'Choose unscented litter over scented litter. Cats have a strong sense of smell and can be sensitive to scents.',
      'Crystal litter is also a popular choice. It has less dust and is often more effective in absorbing odors.',
      'Automatic litter boxes are also a good option for those who may not be home for long stretches of time.',
      'We recommend multiple boxes for multiple cats.',
      'You can buy a litter mat to reduce litter being tracked over the house',
    ],
    Toys: [
      'I love toys! It helps me stay active and decreases boredom!',
      'Hide and seek toys are perfect for fulfilling cats\' natural hunting instinct.',
      'While cats like feather wands, it can also be dangerous if your cat likes to chew and eats the feathers.',
      'Laser pointers - the verdict is not final on this one. Safe to use for a short amount of time!',
      'You also don\'t have to go out and spend money on toys! Use cardboard boxes, balls, paper shopping bags can all be great fun.',
      'Avoid items with small attachments that could break off and be swallowed.',
    ],
    ScratchingItems: [
      'Get both vertical and horizontal scratchers, although cats may end up preferring one over the other. ',
      'Place some catnip on the scratching posts to attract them to use it.',
      'You could also get some corrugated cardboard or sisal rope to act as scratchers.',
      'Get a nail trimmer! We\'ll talk more about trimming later...',
      'Vertical scratchers should be tall enough to cats to stand on their hind legs and stretch.',
    ],
    Bedding: [
      'Cats bond faster if you sleep in the same room as them in the beginning!',
    ],
    Vet: [
      'Some people buy pet insurance and some people don\'t. If you do decide to buy, shop around and ask for referrals!',
    ],
  },
  AdoptionDay: {
    Food: [
      'I will be shy but leave some food out for me!',
      'Place wet food out for them to entice them with the smell.',
      'Do not worry if they hide and don\'t eat right away.',
      'Check the instructions on the bag for the recommended amount of kibble to feed based on your cat\'s body weight.',
      'Wet food is GREAT for cats!',
    ],
    Litter: [
      'Scoop and clean litter box twice a day.',
      'Most cats poop daily, just like us!',
      'Link here to check the health of your cat by monitoring their poop!',
    ],
    Toys: [
      'Toys with catnip are great to leave out.',
      'Try a couple of different toys to find out which ones your cat enjoys!',
      'Do not leave strong or ribbon toys out when your cat is not supervised.',
    ],
    ScratchingItems: [
      'Make sure the scratching post is stable! If the scratching post wobbles, cats won\'t feel safe.',
    ],
    Bedding: [
      'Make a cozy and inviting place for your new cat to cuddle up!',
      'Put the bed away from other pets and away from high traffic areas.',
    ],
    Vet: [],
  },
  Week1: {
    Food: [],
    Litter: [],
    Toys: [],
    ScratchingItems: [],
    Bedding: [],
    Vet: [],
  },
  Month1: {
    Food: [],
    Litter: [],
    Toys: [],
    ScratchingItems: [],
    Bedding: [],
    Vet: [],
  }
};
