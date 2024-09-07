export enum Phase {
  prep = 'Prep',
  adoptionDay = 'Adoption Day',
  week1 = 'Week One',
  settlingIn = 'Settling In',
};

export enum Subroom {
  food = 'food',
  litter = 'litter',
  toys = 'toys',
  scratchingItems = 'scratchingItems',
  bedding = 'bedding',
  vet = 'vet',
};

export const SubroomNames: Record<Subroom, string> = {
  [Subroom.food]: "Food",
  [Subroom.litter]: "Litter",
  [Subroom.toys]: "Toys",
  [Subroom.scratchingItems]: "Scratching Items",
  [Subroom.bedding]: "Bedding",
  [Subroom.vet]: "Vet",
}

type SubroomContent = {
  thought: string;
  messages: string[];
};

export let content: Record<Phase, Record<Subroom, SubroomContent | undefined>> = {
  Prep: {
    food: {
      thought: "Check to see what I am already eating at my foster mom's or shelter. It's a good idea to maintain the same food and slowly transition over 7-10 days!",
      messages: [
        "Cat food comes in dry and wet types. You can use a combination to give your cats variety and benefits that come from both.",
        "Remember to get several water bowls and place around the house to encourage hydration",
        "Yum! Who can resist treats! Pick up some lickable treats to help you bond and socialize with your new cat!",
        "Water fountains are a good idea! The sound of running water may entice your cat to drink more!",
        "A general rule of thumb is one 3 ounce can per 3 pounds of body weight. Vary that depending on whether your cats also free feed on kibble.",
      ],
    },
    litter: {
      thought: "Check to see what type of litter I am already using. If you wish to change, slowly transition by mixing old with new a little at a time.",
      messages: [
        "There are different types of litter. The most common is clumping clay litter.",
        "Choose unscented litter over scented litter. Cats have a strong sense of smell and can be sensitive to scents.",
        "Crystal litter is also a popular choice. It has less dust and is often more effective in absorbing odors.",
        "Automatic litter boxes are also a good option for those who may not be home for long stretches of time.",
        "We recommend multiple boxes for multiple cats.",
        "You can buy a litter mat to reduce litter being tracked over the house.",
      ],
    },
    toys: {
      thought: "I love toys! It helps me stay active and decreases boredom!",
      messages: [
        "While cats like feather wands, it can also be dangerous if your cat likes to chew and eats the feathers.",
        "Avoid items with small attachments that could break off and be swallowed.",
        "Laser pointers - the verdict is not final on this one. Safe to use for a short amount of time!",
        "You also don't have to go out and spend money on toys! Use cardboard boxes, balls, paper shopping bags can all be great fun.",
      ],
    },
    scratchingItems: {
      thought: "Scratching is natural for me! It keeps my claws in great shape and is a great stress reliever as well!",
      messages: [
        "Get both vertical and horizontal scratchers, although cats may end up preferring one over the other.",
        "Place some catnip on the scratching posts to attract them to use it.",
        "You could also get some corrugated cardboard or sisal rope to act as scratchers.",
        "Get a nail trimmer! We'll talk more about trimming later...",
        "Vertical scratchers should be tall enough to cats to stand on their hind legs and stretch.",
      ],
    },
    bedding: {
      thought: "I can easily crawl into the tiniest hole and disappear!",
      messages: [
        "Cats bond faster if you sleep in the same room as them in the beginning!",
        "There are different types of beds and as cats all have different preferences, that preference may change over time.",
        "Cats will want to hide when they get to a new environment. Start out with getting a cave-like covered bed.",
        "If it's the winter, heated cat beds or self-warming cat mats may be a good idea!",
      ],
    },
    vet: {
      thought: "I don't know how I feel about vets! Skibidi!",
      messages: [
        "Some people buy pet insurance and some people don't. If you do decide to buy, shop around and ask for referrals!",
        "Most cats don't take well to long car trips. Might be a good idea to review nearby vets.",
        "All adopted pets are microchipped. But getting a collar and ID tag would help ensure you cat gets home safely if it goes missing.",
        "Be sure to check your cat room ahead of time for plants that can be poisonous to cats. Click here for a checklist.",
      ],
    },
  },
  "Adoption Day": {
    food: {
      thought: "I will be shy but leave some food out for me!",
      messages: [
        "Place wet food out for them to entice them with the smell.",
        "Do not worry if they hide and don't eat right away.",
        "Check the instructions on the bag for the recommended amount of kibble to feed based on your cat's body weight.",
        "Might be a good time to offer some lickable treats like Churus to help with bonding!",
        "Hiding is their way of getting used to their new environment but most cats are very food motivated.",
      ],
    },
    litter: {
      thought: "I am sensitive to smells! Please place my litter box away from my food and water bowls.",
      messages: [
        "Though they may hide, cats like to be clean. Scoop and clean the litter box twice a day.",
        "They may not poop the first day but to make sure they're eating, monitor their litter box activity.",
        "Link here to check the health of your cat by monitoring their poop!",
        "Make sure the litter box has at least one to two inches of litter.",
        "Cats instinctinvely know how to use the litter box. Just show them where it is and let their instincts take over!",
      ]
    },
    toys: {
      thought: "Although I may hide, leave some toys out for me, especially those with catnip inside!",
      messages: [
        "Try a couple of different toys to find out which ones your cat enjoys!",
        "Do not leave strong or ribbon toys out when your cat is not supervised.",
        "If you have kittens, they need no urging to play. Get some tunnels or toy mice for them.",
        "Older cats may be shy but are still curious and watchful. Gently encourage them with a wand toy or a hide and seek toy.",
      ],
    },
    scratchingItems: {
      thought: "Scratching eases my tension. Can I have at least one scratcher?",
      messages: [
        "Make sure the scratching post is stable. If the scratching post wobbles, cats won't feel safe.",
        "If you notice scratch marks on any furniture, that would be a sure sign to start placing your scratchers there.",
        "Cat fur should be soft and shiny and not matted. This is a good time to get familiar with your cat's fur health.",
      ],
    },
    bedding: {
      thought: "I may sleep a lot the first day but it's my way of getting used to my new home!",
      messages: [
        "Make a cozy and inviting place for your new cat to cuddle up!",
        "Put the bed away from other pets and away from high traffic areas.",
        "Don't be surprised if they don't take to your prepared beds for a while!",
        "Some cats love to crawl under blankets and \"disappear\"!",
      ],
    },
    vet: {
      thought: "I should be all up to date on my vaccines! It's still good to take a quick peek at my paperwork:-)",
      messages: [
        "Find a safe place to store all the documentation in one place, including vaccine dates and medications, if any.",
        "Now's probably a good time to start finding a suitable carrier for vet visits.",
        "Most cats don't like being in carriers so find one with a large top or side opening so you can quickly place them inside.",
      ],
    },
  },
  "Week One": {
    food: {
      thought: "Can you tell that food is always a good way to get me to come out of hiding?",
      messages: [
        "Cats love routines and schedules. Maintain the same feeding times for your cats.",
        "If you have multiple cats, you may need to monitor to make sure both are eating. Or separate them to ensure they're both getting enough food.",
        "Perhaps it's time to look into dental treats or treats that contain psyllium to prevent hairballs.",
        "Changing cat food suddenly can cause digestive upset. Always remember to transition into new food.",
      ]
    },
    litter: {
      thought: "If I'm a kitten, I could still be a bit messy so be patient with me!",
      messages: [
        "If you have more than one cat, it may be best to change out the cat litter more often, like every 2-3 weeks.",
        "If you want to transition to new litter begin mixing in the new litter with the old.",
        "If you are pregnant, or have lowered immunity, always wear gloves and a mask when cleaning the litter box.",
        "Most cats poop daily, just like us!",
      ]
    },
    toys: {
      thought: "I don't need a lot of toys but would love to have you play with me!",
      messages: [
        "Though not really a toy, window hammocks are a popular choice for cats who love bird watching.",
        "Cats are known to be swipers and by now, you may be wondering how you seem to already have lost more than half your toys!",
        "Crinkly paper is also a hit with cats! The sound they make tells you your cat is active!",
        "Cat TV? Turn on the cat channel to see if the birds and wildlife is holding their attention.",
        "If you already have another pet, take time before introducing them to each other. Link here for more info.",
      ]
    },
    scratchingItems: {
      thought: "Grooming myself is my number one favorite activity!",
      messages: [
        "Cat nails need to be trimmed every few weeks. Trim only the white part.",
        "Place scratching posts near where your cat is already scratching and in high traffic areas of your house.",
        "Brushing your cat's fur regularly keeps it healthy, removes dead skin cells, prevents tangling and improves circulation.",
        "Omega 3 fish oil is known to promote a shiny and healthy coat!",
      ]
    },
    bedding: {
      thought: "You may notice that I sleep more than your human friends :-) That's how I heal and stay healthy!",
      messages: [
        "By the end of Week 1, your cat may already have settled into a comfy place for bedtime.",
        "Are you a light sleeper? If your cat is super friendly and wants to sleep on your bed with you, now's the time to decide if that's something you're comfortable with.",
        "Like babies, cats will often wake up in the middle of the night and may also do zoomies!",
      ]
    },
    vet: {
      thought: "Have you found a vet for me yet? No? Good! :-)",
      messages: [
        "Dental health is oh so important for cats.",
        "Brush your cat's teeth and get cat tooth gel to help prevent the formation of tartar. ",
        "Cats groom themselves frequently throughout the day. If they stop grooming, it could be a sign that they're sick.",
        "As you get nearer to the vet appointment, get your cat comfortable with the cat carrier by leaving it out.",
      ]
    },
  },
  "Settling In": {
    food: {
      thought: "Meow, isn't it time for my food yet?",
      messages: [
        "By now, your cat could be out of quarantine and roaming around the house! ",
        "You might need to keep food that are poisonous out of their reach or in locked cabinets and drawers.",
        "Cats can eat boiled chicken, fish and eggs but make sre they're thoroughly cooked and without any seasoning.",
        "Cats on kitchen counters? Dining tables? That's an inevitable discussion the family needs to have!",
      ]
    },
    litter: {
      thought: "If it looks like I'm going in the litter box rght after you've cleaned it... it's just your imagination!",
      messages: [
        "By the end of one month, make sure the litter in your litter box is completely changed out.",
        "Monitor the poop. If you see any white worms or worm casings, try to retrieve a fresh fecal sample for the vet.",
        "Did we mention that pregnant women should not clean litter boxes?",
        "If cats start to go outside the litter box, it is a sign that they could be stressed or have an underlying health issue.",
      ]
    },
    toys: {
      thought: "If you're not home, I do miss you although I may not show it.",
      messages: [
        "It might be time to invest in a cat tree or cat condo!",
        "Cat trees provide a secure observation tower that's safely away from whatever's happening on the ground.",
        "You may find that your cat has a favorite toy by now. What is it?",
        "Playing with your cats is crucial to their healthy development and decreasing negative behaviors they may exhibit out of boredom.", 
      ]
    },
    scratchingItems: {
      thought: "I love my claws so please don't ever declaw me!",
      messages: [
        "Cats do not need to be bathed unless they have parasites or got dirty.",
        "If your cat needs a bath, Dawn dish soap is safe. Use Dawn Original or Dawn Free and Clear. Make sure you dry the fur thoroughly.",
        "By now, it's probably time for some nail trimming. Use treats to reward cats after trimming.",
      ]
    },
    bedding: {
      thought: "I wake up easily to sounds but fall back asleep just as quickly!",
      messages: [
        "It's a good idea to check their bedding to make sure there isn't any worm casings or fleas.",
        "Sleeping with your cat is a great way to bond.",
        "Slow blinks is your cat's way of telling you that they love you!",
        "How many different sleeping positions does your cat have? Cats can sleep in the weirdest places!",
      ]
    },
    vet: {
      thought: "I may be scared of going to the vet but I know it is still important for me. Having my favorite toy or blanket may help!",
      messages: [
        "All cats, even indoor cats, need flea medications.",
        "Probiotics are handy to have around to ease upset tummies. Purina Pro Plan ForiFlora is both popular and tasty.",
        "Schedule a cat appointment/ checkup by the end of this first month!",
        "It is also good to know where the nearest 24 hour emergency vet is.",
      ]
    },
  }
};
