import { Scene, VocabularyItem } from '../types';

export const SCENES: Record<string, Scene> = {
  DAILY_ROUTINES: { en: 'Daily Routines', zh: '生活起居', theme: 'daily_routines', color: '#D4A373' }, // Warm Sand
  DAILY_SELF_CARE: { en: 'Daily Self-care', zh: '日常自理', theme: 'daily_self_care', color: '#A3B1C6' }, // Slate Blue
  PLAY_OUTDOORS: { en: 'Play & Outdoors', zh: '游戏与户外', theme: 'play_outdoors', color: '#E9C46A' }, // Warm Ochre
  BODY_MOVEMENT: { en: 'Body & Movement', zh: '身体与动作', theme: 'body_movement', color: '#A7B899' } // Sage Green
};

export const vocabularyData: VocabularyItem[] = [
  {
    id: '1', scene: SCENES.DAILY_ROUTINES, word: `wake`, meaning: `醒来`, level: 'L1',
    l2: { en: `Wake up!`, zh: `醒来！` },
    l3: [`Wake up early.`, `Wake up slowly.`, `Wake up, sleepyhead!`],
    l4: [`Wake up when Mommy calls you.`, `Wake up and stretch before you get out of bed.`, `Wake up early so we have time for breakfast.`]
  },
  {
    id: '2', scene: SCENES.DAILY_ROUTINES, word: `open`, meaning: `打开`, level: 'L1',
    l2: { en: `Open your eyes!`, zh: `打开门！` },
    l3: [`Open the window.`, `Open the book.`, `Open the door.`],
    l4: [`Open the book to the next page.`, `Open the box when Mommy says, "Go!"`, `Open the window before we read the story.`]
  },
  {
    id: '3', scene: SCENES.DAILY_ROUTINES, word: `close`, meaning: `关闭`, level: 'L1',
    l2: { en: `Close the door!`, zh: `关上门！` },
    l3: [`Close the window.`, `Close the book.`, `Close your eyes.`],
    l4: [`Close the book when the story is finished.`, `Close the window before you go to bed.`, `Close the box and put it on the shelf.`]
  },
  {
    id: '4', scene: SCENES.DAILY_ROUTINES, word: `drink`, meaning: `喝`, level: 'L1',
    l2: { en: `Drink some water!`, zh: `喝点水！` },
    l3: [`Drink your milk.`, `Drink some juice.`, `Drink from your cup.`],
    l4: [`Drink your milk before you eat breakfast.`, `Drink some water when you feel thirsty.`, `Drink from your cup and then put it on the table.`]
  },
  {
    id: '5', scene: SCENES.DAILY_ROUTINES, word: `wash`, meaning: `洗`, level: 'L1',
    l2: { en: `Wash your hands!`, zh: `洗洗手！` },
    l3: [`Wash your face.`, `Wash the cup.`, `Wash your hands.`],
    l4: [`Wash your hands before you eat.`, `Wash the cup and put it by the sink.`, `Wash your face after you brush your teeth.`]
  },
  {
    id: '6', scene: SCENES.DAILY_ROUTINES, word: `hug`, meaning: `拥抱`, level: 'L1',
    l2: { en: `Hug Mommy!`, zh: `抱抱妈妈！` },
    l3: [`Hug Daddy.`, `Hug your teddy bear.`, `Give me a hug.`],
    l4: [`Hug Teddy before you go to bed.`, `Give Mommy a hug when you see her.`, `Hug your teddy bear and sit on the bed.`]
  },
  {
    id: '7', scene: SCENES.DAILY_ROUTINES, word: `kiss`, meaning: `亲吻`, level: 'L1',
    l2: { en: `Kiss Mommy!`, zh: `亲亲妈妈！` },
    l3: [`Kiss Daddy.`, `Kiss your teddy bear.`, `Give me a kiss.`],
    l4: [`Kiss Teddy before you go to bed.`, `Give Mommy a kiss when she comes home.`, `Kiss Teddy good night and turn off the light.`]
  },
  {
    id: '8', scene: SCENES.DAILY_ROUTINES, word: `lie down`, meaning: `躺下`, level: 'L1',
    l2: { en: `Lie down on the mat!`, zh: `躺在垫子上！` },
    l3: [`Lie down on the bed.`, `Lie down on the mat.`, `Lie down here.`],
    l4: [`Lie down on the bed before the story starts.`, `Lie down on the mat and close your eyes.`, `Lie down here when you are ready to rest.`]
  },
  {
    id: '9', scene: SCENES.DAILY_ROUTINES, word: `blink`, meaning: `眨眼`, level: 'L1',
    l2: { en: `Blink your eyes!`, zh: `眨眨眼！` },
    l3: [`Blink slowly.`, `Blink three times.`, `Blink your left eye.`],
    l4: [`Blink three times when you hear the bell.`, `Blink your eyes and then close them.`, `Blink your left eye when Mommy points to it.`]
  },
  {
    id: '10', scene: SCENES.DAILY_ROUTINES, word: `sit`, meaning: `坐`, level: 'L1',
    l2: { en: `Sit down!`, zh: `坐下来！` },
    l3: [`Sit on the chair.`, `Sit on the floor.`, `Sit beside Mommy.`],
    l4: [`Sit on the mat while we read the book.`, `Sit beside Mommy when you are ready.`, `Sit on the chair and wait for Daddy.`]
  },
  {
    id: '11', scene: SCENES.DAILY_ROUTINES, word: `turn on`, meaning: `打开（电器）`, level: 'L2',
    l2: { en: `Turn on the light!`, zh: `打开灯！` },
    l3: [`Turn on the lamp.`, `Turn on the fan.`, `Turn on the music.`],
    l4: [`Turn on the light before you start reading.`, `Turn on the music when Mommy says, "Go!"`, `Turn on the fan if you feel hot.`]
  },
  {
    id: '12', scene: SCENES.DAILY_ROUTINES, word: `turn off`, meaning: `关闭（电器）`, level: 'L2',
    l2: { en: `Turn off the light!`, zh: `关灯！` },
    l3: [`Turn off the lamp.`, `Turn off the fan.`, `Turn off the music.`],
    l4: [`Turn off the light before you go to bed.`, `Turn off the music when Mommy says, "Stop!"`, `Turn off the fan when you leave the room.`]
  },
  {
    id: '13', scene: SCENES.DAILY_ROUTINES, word: `rub`, meaning: `揉；擦`, level: 'L1',
    l2: { en: `Rub your eyes!`, zh: `揉揉手！` },
    l3: [`Rub your hands together.`, `Rub your eyes gently.`, `Rub the towel on your face.`],
    l4: [`Rub your hands together when they feel cold.`, `Rub your face with the towel after you wash it.`, `Rub your hands and then dry them with the towel.`]
  },
  {
    id: '14', scene: SCENES.DAILY_ROUTINES, word: `stretch`, meaning: `伸展`, level: 'L1',
    l2: { en: `Stretch your arms!`, zh: `伸伸胳膊！` },
    l3: [`Stretch your legs.`, `Stretch up high.`, `Stretch your back.`],
    l4: [`Stretch your arms before you start running.`, `Stretch up high and touch the ceiling.`, `Stretch your legs after you wake up.`]
  },
  {
    id: '15', scene: SCENES.DAILY_ROUTINES, word: `yawn`, meaning: `打哈欠`, level: 'L1',
    l2: { en: `A big yawn!`, zh: `一个大哈欠！` },
    l3: [`Yawn slowly.`, `Yawn like a sleepy bear.`, `Yawn and stretch.`],
    l4: [`Yawn when you feel sleepy.`, `Yawn and stretch before you lie down.`, `Yawn like a sleepy bear and close your eyes.`]
  },
  {
    id: '16', scene: SCENES.DAILY_ROUTINES, word: `pack`, meaning: `打包；整理行囊`, level: 'L2',
    l2: { en: `Pack your bag!`, zh: `整理你的包！` },
    l3: [`Pack your toys.`, `Pack your lunch.`, `Pack the book.`],
    l4: [`Pack your bag before we go to school.`, `Pack your favorite toys for the trip.`, `Pack the lunchbox into your backpack.`]
  },
  {
    id: '17', scene: SCENES.DAILY_ROUTINES, word: `comb`, meaning: `梳理`, level: 'L1',
    l2: { en: `Comb your hair!`, zh: `梳头发！` },
    l3: [`Comb your hair slowly.`, `Comb Mommy's hair.`, `Comb Teddy's hair.`],
    l4: [`Comb your hair before you go to school.`, `Comb Teddy's hair and then put the comb away.`, `Comb the back of your hair while Mommy holds the mirror.`]
  },
  {
    id: '18', scene: SCENES.DAILY_ROUTINES, word: `brush`, meaning: `刷；刷牙`, level: 'L1',
    l2: { en: `Brush your teeth!`, zh: `刷牙！` },
    l3: [`Brush your hair.`, `Brush your teeth slowly.`, `Brush your teeth gently.`],
    l4: [`Brush your teeth before you eat breakfast.`, `Brush Teddy's teeth and then put the brush away.`, `Brush the top teeth before you brush the bottom teeth.`]
  },
  {
    id: '19', scene: SCENES.DAILY_ROUTINES, word: `listen`, meaning: `听`, level: 'L1',
    l2: { en: `Listen to me!`, zh: `听我说！` },
    l3: [`Listen to the music.`, `Listen to the bird.`, `Listen to Mommy.`],
    l4: [`Listen to Mommy before you start the game.`, `Listen for the bell and then clap.`, `Listen to the music while you dance.`]
  },
  {
    id: '20', scene: SCENES.DAILY_ROUTINES, word: `read`, meaning: `阅读`, level: 'L1',
    l2: { en: `Read the book!`, zh: `读书！` },
    l3: [`Read a story.`, `Read with Mommy.`, `Read this page.`],
    l4: [`Read the story before you go to bed.`, `Read this page and point to the picture.`, `Read with Mommy and tell her what you see.`]
  },
  {
    id: '21', scene: SCENES.DAILY_SELF_CARE, word: `smell`, meaning: `闻`, level: 'L1',
    l2: { en: `Smell the soup!`, zh: `闻闻汤！` },
    l3: [`Smell the flower.`, `Smell the food.`, `Smell the soup.`],
    l4: [`Smell the soup before you taste it.`, `Smell the flower and tell me if you like it.`, `Smell the food and guess what we are going to eat.`]
  },
  {
    id: '22', scene: SCENES.DAILY_SELF_CARE, word: `bite`, meaning: `咬；吃一口`, level: 'L2',
    l2: { en: `Take a bite!`, zh: `咬一口！` },
    l3: [`Take a bite of the apple.`, `Take a small bite.`, `Take another bite.`],
    l4: [`Take a small bite before you take another one.`, `Take three bites and then drink some water.`, `Take a bite of the apple before you eat the banana.`]
  },
  {
    id: '23', scene: SCENES.DAILY_SELF_CARE, word: `hold`, meaning: `拿；握住`, level: 'L1',
    l2: { en: `Hold the cup!`, zh: `拿住杯子！` },
    l3: [`Hold the spoon.`, `Hold my hand.`, `Hold the toy.`],
    l4: [`Hold the cup with two hands.`, `Hold my hand when we cross the street.`, `Hold Teddy while you walk to the sofa.`]
  },
  {
    id: '24', scene: SCENES.DAILY_SELF_CARE, word: `put on`, meaning: `穿上；戴上`, level: 'L2',
    l2: { en: `Put on your socks!`, zh: `穿上你的袜子！` },
    l3: [`Put on your hat.`, `Put on your coat.`, `Put on your shoes.`],
    l4: [`Put on your shoes before we go outside.`, `Put on your coat when it is cold.`, `Put on your socks and then put on your shoes.`]
  },
  {
    id: '25', scene: SCENES.DAILY_SELF_CARE, word: `take off`, meaning: `脱下；取下`, level: 'L2',
    l2: { en: `Take off your shoes!`, zh: `脱下鞋！` },
    l3: [`Take off your hat.`, `Take off your coat.`, `Take off your socks.`],
    l4: [`Take off your shoes when you come inside.`, `Take off your coat before you sit down.`, `Take off your socks and put them in the basket.`]
  },
  {
    id: '26', scene: SCENES.DAILY_SELF_CARE, word: `spit`, meaning: `吐出`, level: 'L2',
    l2: { en: `Spit it out!`, zh: `吐出来！` },
    l3: [`Spit the water.`, `Spit in the sink.`, `Spit the seeds.`],
    l4: [`Spit the toothpaste into the sink.`, `Spit the water out when you finish gargling.`, `Spit the seeds out when you eat the watermelon.`]
  },
  {
    id: '27', scene: SCENES.DAILY_SELF_CARE, word: `pull up`, meaning: `向上拉`, level: 'L2',
    l2: { en: `Pull up your pants!`, zh: `把裤子拉上来！` },
    l3: [`Pull up your socks.`, `Pull up the zipper.`, `Pull up your sleeves.`],
    l4: [`Pull up your pants after you use the toilet.`, `Pull up your socks before you put on your shoes.`, `Pull up the zipper when you finish putting on your coat.`]
  },
  {
    id: '28', scene: SCENES.DAILY_SELF_CARE, word: `blow`, meaning: `吹`, level: 'L1',
    l2: { en: `Blow on the soup!`, zh: `吹吹汤！` },
    l3: [`Blow on your food.`, `Blow on the bubble.`, `Blow out the candle.`],
    l4: [`Blow on the soup before you taste it.`, `Blow three times to make the bubble bigger.`, `Blow out the candle when Mommy says, "Go!"`]
  },
  {
    id: '29', scene: SCENES.DAILY_SELF_CARE, word: `chew`, meaning: `咀嚼`, level: 'L2',
    l2: { en: `Chew your food!`, zh: `嚼嚼食物！` },
    l3: [`Chew slowly.`, `Chew the apple.`, `Chew your food well.`],
    l4: [`Chew each bite slowly before you swallow.`, `Chew your food well before you take another bite.`, `Chew the apple and then drink some water.`]
  },
  {
    id: '30', scene: SCENES.DAILY_SELF_CARE, word: `pass`, meaning: `递；传递`, level: 'L2',
    l2: { en: `Pass the cup!`, zh: `把杯子递过来！` },
    l3: [`Pass the spoon.`, `Pass the ball.`, `Pass it to Mommy.`],
    l4: [`Pass the cup to Daddy when he asks for it.`, `Pass the ball to Mommy and then sit down.`, `Pass the red block to me when I say, "Go!"`]
  },
  {
    id: '31', scene: SCENES.DAILY_SELF_CARE, word: `zip`, meaning: `拉拉链`, level: 'L2',
    l2: { en: `Zip up your coat!`, zh: `拉上外套拉链！` },
    l3: [`Zip up your jacket.`, `Zip the bag.`, `Zip it up slowly.`],
    l4: [`Zip up your coat before you go outside.`, `Zip the bag after you put the toys inside.`, `Zip up your jacket when you feel cold.`]
  },
  {
    id: '32', scene: SCENES.DAILY_SELF_CARE, word: `button`, meaning: `扣纽扣`, level: 'L3',
    l2: { en: `Button your shirt!`, zh: `扣好衬衫纽扣！` },
    l3: [`Button your coat.`, `Button the coat.`, `Button the top button.`],
    l4: [`Button your coat before you go outside.`, `Button your shirt one button at a time.`, `Button the top button and then zip your coat.`]
  },
  {
    id: '33', scene: SCENES.DAILY_SELF_CARE, word: `tie`, meaning: `系；打结`, level: 'L3',
    l2: { en: `Tie your shoes!`, zh: `系鞋带！` },
    l3: [`Tie the ribbon.`, `Tie your shoelaces.`, `Tie a knot.`],
    l4: [`Tie your shoes before you go outside.`, `Tie the ribbon around the box.`, `Tie your shoelaces and then put on your shoes.`]
  },
  {
    id: '34', scene: SCENES.DAILY_SELF_CARE, word: `snap`, meaning: `按扣；扣上`, level: 'L3',
    l2: { en: `Snap the button!`, zh: `扣上按扣！` },
    l3: [`Snap the coat.`, `Snap the pocket.`, `Snap it closed.`],
    l4: [`Snap the buttons on your coat before you go outside.`, `Snap the pocket closed after you put the toy inside.`, `Snap the coat closed and then put on your shoes.`]
  },
  {
    id: '35', scene: SCENES.DAILY_SELF_CARE, word: `tuck in`, meaning: `塞进；掖好`, level: 'L3',
    l2: { en: `Tuck in your shirt!`, zh: `把衣服塞好！` },
    l3: [`Tuck in your shirt.`, `Tuck in the blanket.`, `Tuck in the corners.`],
    l4: [`Tuck in your shirt before you go to school.`, `Tuck Teddy into the blanket before bed.`, `Tuck in the corners after you make the bed.`]
  },
  {
    id: '36', scene: SCENES.DAILY_SELF_CARE, word: `take out`, meaning: `取出；拿出`, level: 'L2',
    l2: { en: `Take out the spoon!`, zh: `把勺子拿出来！` },
    l3: [`Take out the cup.`, `Take out your clothes.`, `Take out the toy.`],
    l4: [`Take out the spoon before you eat.`, `Take out the toy and put it on the table.`, `Take out the red cup when Mommy asks for it.`]
  },
  {
    id: '37', scene: SCENES.DAILY_SELF_CARE, word: `pour`, meaning: `倒`, level: 'L2',
    l2: { en: `Pour the water!`, zh: `倒水！` },
    l3: [`Pour the milk.`, `Pour some juice.`, `Pour water into the cup.`],
    l4: [`Pour the milk into Mommy's cup.`, `Pour some water before you add the powder.`, `Pour slowly so the water does not spill.`]
  },
  {
    id: '38', scene: SCENES.DAILY_SELF_CARE, word: `stir`, meaning: `搅拌`, level: 'L2',
    l2: { en: `Stir the soup!`, zh: `搅搅汤！` },
    l3: [`Stir the milk.`, `Stir the soup slowly.`, `Stir with a spoon.`],
    l4: [`Stir the soup three times before you taste it.`, `Stir the milk after you add the powder.`, `Stir the soup and then put the spoon on the table.`]
  },
  {
    id: '39', scene: SCENES.DAILY_SELF_CARE, word: `scoop`, meaning: `舀；铲取`, level: 'L3',
    l2: { en: `Scoop the rice!`, zh: `舀米饭！` },
    l3: [`Scoop the rice.`, `Scoop some soup.`, `Scoop the sand.`],
    l4: [`Scoop the rice into your bowl.`, `Scoop three spoonfuls into the cup.`, `Scoop the sand into the bucket and carry it to Mommy.`]
  },
  {
    id: '40', scene: SCENES.DAILY_SELF_CARE, word: `peel`, meaning: `剥皮`, level: 'L3',
    l2: { en: `Peel the banana!`, zh: `剥香蕉！` },
    l3: [`Peel the orange.`, `Peel the egg.`, `Peel the sticker.`],
    l4: [`Peel the banana before you eat it.`, `Peel the orange and put the peel in the bin.`, `Peel the egg carefully before you put it on the plate.`]
  },
  {
    id: '41', scene: SCENES.PLAY_OUTDOORS, word: `run`, meaning: `跑`, level: 'L1',
    l2: { en: `Run to Mommy!`, zh: `跑向妈妈！` },
    l3: [`Run fast.`, `Run slowly.`, `Run to me.`],
    l4: [`Run to Mommy when she calls you.`, `Run around the chair three times.`, `Run to the door and come back when I say, "Go!"`]
  },
  {
    id: '42', scene: SCENES.PLAY_OUTDOORS, word: `jump`, meaning: `跳`, level: 'L1',
    l2: { en: `Jump up!`, zh: `跳起来！` },
    l3: [`Jump high.`, `Jump over the line.`, `Jump on the mat.`],
    l4: [`Jump over the line three times.`, `Jump to Mommy when I say, "Go!"`, `Jump over the blocks without touching them.`]
  },
  {
    id: '43', scene: SCENES.PLAY_OUTDOORS, word: `push`, meaning: `推`, level: 'L1',
    l2: { en: `Push the car!`, zh: `推车子！` },
    l3: [`Push the box.`, `Push the door.`, `Push the button.`],
    l4: [`Push the box to Mommy.`, `Push the car across the floor.`, `Push the button when the light turns red.`]
  },
  {
    id: '44', scene: SCENES.PLAY_OUTDOORS, word: `tickle`, meaning: `挠痒`, level: 'L1',
    l2: { en: `Tickle Mommy!`, zh: `挠挠妈妈！` },
    l3: [`Tickle Daddy.`, `Tickle Teddy.`, `Tickle my hand.`],
    l4: [`Tickle Mommy when she says, "Go!"`, `Tickle Teddy and then give him a hug.`, `Tickle my hand three times and stop.`]
  },
  {
    id: '45', scene: SCENES.PLAY_OUTDOORS, word: `catch`, meaning: `接住；抓住`, level: 'L2',
    l2: { en: `Catch the ball!`, zh: `接球！` },
    l3: [`Catch the ball.`, `Catch the beanbag.`, `Catch it with two hands.`],
    l4: [`Catch the ball when Mommy throws it.`, `Catch the balloon before it touches the floor.`, `Catch the red ball and pass it to Daddy.`]
  },
  {
    id: '46', scene: SCENES.PLAY_OUTDOORS, word: `throw`, meaning: `扔；投`, level: 'L2',
    l2: { en: `Throw the ball!`, zh: `扔球！` },
    l3: [`Throw the ball to Mommy.`, `Throw the ball high.`, `Throw the ball into the basket.`],
    l4: [`Throw the red ball to Mommy.`, `Throw the ball into the basket three times.`, `Throw the ball when I say, "Go!"`]
  },
  {
    id: '47', scene: SCENES.PLAY_OUTDOORS, word: `kick`, meaning: `踢`, level: 'L1',
    l2: { en: `Kick the ball!`, zh: `踢球！` },
    l3: [`Kick the ball forward.`, `Kick the ball to Daddy.`, `Kick the ball gently.`],
    l4: [`Kick the ball into the goal.`, `Kick the red ball to Daddy.`, `Kick the ball three times when I say, "Go!"`]
  },
  {
    id: '48', scene: SCENES.PLAY_OUTDOORS, word: `roll`, meaning: `滚动`, level: 'L1',
    l2: { en: `Roll the ball!`, zh: `滚球！` },
    l3: [`Roll the ball to Mommy.`, `Roll the ball slowly.`, `Roll the car.`],
    l4: [`Roll the ball back to me.`, `Roll the ball under the chair.`, `Roll the car to Daddy and then stop.`]
  },
  {
    id: '49', scene: SCENES.PLAY_OUTDOORS, word: `hide`, meaning: `躲藏`, level: 'L1',
    l2: { en: `Hide behind the sofa!`, zh: `躲在沙发后面！` },
    l3: [`Hide behind the chair.`, `Hide under the table.`, `Hide the teddy bear.`],
    l4: [`Hide behind the door until Mommy finds you.`, `Hide the teddy bear under the blanket.`, `Hide and come out when I say, "Come out!"`]
  },
  {
    id: '50', scene: SCENES.PLAY_OUTDOORS, word: `press`, meaning: `按压`, level: 'L1',
    l2: { en: `Press the button!`, zh: `按按钮！` },
    l3: [`Press the button.`, `Press the bell.`, `Press the clay.`],
    l4: [`Press the red button three times.`, `Press the bell when you are ready.`, `Press the clay and make a small mark.`]
  },
  {
    id: '51', scene: SCENES.PLAY_OUTDOORS, word: `climb`, meaning: `爬；攀爬`, level: 'L2',
    l2: { en: `Climb up!`, zh: `爬上去！` },
    l3: [`Climb the stairs.`, `Climb the ladder.`, `Climb onto the mat.`],
    l4: [`Climb the stairs with Mommy.`, `Climb onto the mat and sit down.`, `Climb up the ladder when Mommy says, "Go!"`]
  },
  {
    id: '52', scene: SCENES.PLAY_OUTDOORS, word: `slide`, meaning: `滑`, level: 'L1',
    l2: { en: `Slide down!`, zh: `滑下来！` },
    l3: [`Slide down the slide.`, `Slide on the floor.`, `Slide slowly.`],
    l4: [`Slide down the slide when it is your turn.`, `Slide all the way down and stand up.`, `Slide down with Mommy and then walk back.`]
  },
  {
    id: '53', scene: SCENES.PLAY_OUTDOORS, word: `stack`, meaning: `堆叠`, level: 'L2',
    l2: { en: `Stack the blocks!`, zh: `把积木堆起来！` },
    l3: [`Stack the blocks.`, `Stack the cups.`, `Stack them high.`],
    l4: [`Stack three blocks on top of each other.`, `Stack the red blocks on top of the blue ones.`, `Stack the cups and then knock them down.`]
  },
  {
    id: '54', scene: SCENES.PLAY_OUTDOORS, word: `build`, meaning: `搭建；建造`, level: 'L2',
    l2: { en: `Build a bridge!`, zh: `搭一座桥！` },
    l3: [`Build a house.`, `Build a tower.`, `Build with blocks.`],
    l4: [`Build a tower with five blocks.`, `Build a bridge for the toy car.`, `Build a house and put Teddy inside.`]
  },
  {
    id: '55', scene: SCENES.PLAY_OUTDOORS, word: `spin`, meaning: `旋转`, level: 'L1',
    l2: { en: `Spin around!`, zh: `转圈圈！` },
    l3: [`Spin slowly.`, `Spin the wheel.`, `Spin around twice.`],
    l4: [`Spin around three times and stop.`, `Spin the wheel when Mommy says, "Go!"`, `Spin the top and watch it move.`]
  },
  {
    id: '56', scene: SCENES.PLAY_OUTDOORS, word: `swing`, meaning: `荡秋千；摆动`, level: 'L1',
    l2: { en: `Swing your arms!`, zh: `摆动你的手臂！` },
    l3: [`Swing back and forth.`, `Swing high.`, `Swing slowly.`],
    l4: [`Swing back when Mommy pushes you.`, `Swing for five seconds and then stop.`, `Swing back and forth while you sing.`]
  },
  {
    id: '57', scene: SCENES.PLAY_OUTDOORS, word: `dig`, meaning: `挖`, level: 'L1',
    l2: { en: `Dig in the sand!`, zh: `在沙子里挖！` },
    l3: [`Dig a hole.`, `Dig with the shovel.`, `Dig in the garden.`],
    l4: [`Dig a hole for the toy.`, `Dig in the sand until you find the treasure.`, `Dig three times and put the sand in the bucket.`]
  },
  {
    id: '58', scene: SCENES.PLAY_OUTDOORS, word: `pedal`, meaning: `踩踏板`, level: 'L3',
    l2: { en: `Pedal the bike!`, zh: `踩自行车踏板！` },
    l3: [`Pedal slowly.`, `Pedal faster.`, `Pedal forward.`],
    l4: [`Pedal the tricycle to Mommy.`, `Pedal faster when the path is clear.`, `Pedal to the line and stop.`]
  },
  {
    id: '59', scene: SCENES.PLAY_OUTDOORS, word: `balance`, meaning: `保持平衡`, level: 'L2',
    l2: { en: `Balance on one foot!`, zh: `单脚保持平衡！` },
    l3: [`Balance on one foot.`, `Balance on the line.`, `Balance on the mat.`],
    l4: [`Balance on one foot for five seconds.`, `Balance on the line without stepping off.`, `Balance like a flamingo and then switch feet.`]
  },
  {
    id: '60', scene: SCENES.BODY_MOVEMENT, word: `dance`, meaning: `跳舞`, level: 'L1',
    l2: { en: `Dance with me!`, zh: `和我一起跳舞！` },
    l3: [`Dance fast.`, `Dance slowly.`, `Dance around the chair.`],
    l4: [`Dance when you hear the music.`, `Dance like a robot and then freeze.`, `Dance around the chair three times.`]
  },
  {
    id: '61', scene: SCENES.BODY_MOVEMENT, word: `clap`, meaning: `拍手`, level: 'L1',
    l2: { en: `Clap your hands!`, zh: `拍手！` },
    l3: [`Clap slowly.`, `Clap three times.`, `Clap loudly.`],
    l4: [`Clap three times when you hear the bell.`, `Clap above your head and then sit down.`, `Clap with Mommy when the music starts.`]
  },
  {
    id: '62', scene: SCENES.BODY_MOVEMENT, word: `stomp`, meaning: `跺脚`, level: 'L1',
    l2: { en: `Stomp your feet!`, zh: `跺脚！` },
    l3: [`Stomp slowly.`, `Stomp three times.`, `Stomp on the floor.`],
    l4: [`Stomp three times when Mommy says, "Go!"`, `Stomp your feet and then freeze.`, `Stomp on the floor when you hear the drum.`]
  },
  {
    id: '63', scene: SCENES.BODY_MOVEMENT, word: `nod`, meaning: `点头`, level: 'L1',
    l2: { en: `Nod your head!`, zh: `点头！` },
    l3: [`Nod slowly.`, `Nod three times.`, `Nod yes.`],
    l4: [`Nod your head when the answer is yes.`, `Nod three times when Mommy asks you a question.`, `Nod to Daddy and then wave goodbye.`]
  },
  {
    id: '64', scene: SCENES.BODY_MOVEMENT, word: `shake`, meaning: `摇动`, level: 'L1',
    l2: { en: `Shake your head!`, zh: `摇头！` },
    l3: [`Shake your hands.`, `Shake the toy.`, `Shake your head slowly.`],
    l4: [`Shake the rattle when you hear the music.`, `Shake your hands and then clap.`, `Shake the toy three times and put it down.`]
  },
  {
    id: '65', scene: SCENES.BODY_MOVEMENT, word: `point`, meaning: `指`, level: 'L1',
    l2: { en: `Point to the car!`, zh: `指向车子！` },
    l3: [`Point to Mommy.`, `Point to the ball.`, `Point up.`],
    l4: [`Point to the red block on the table.`, `Point to Mommy when you hear her name.`, `Point to the door and then walk over to it.`]
  },
  {
    id: '66', scene: SCENES.BODY_MOVEMENT, word: `wave`, meaning: `挥手`, level: 'L1',
    l2: { en: `Wave hello!`, zh: `挥手！` },
    l3: [`Wave goodbye.`, `Wave to Mommy.`, `Wave your hands.`],
    l4: [`Wave to Mommy when she comes in.`, `Wave goodbye before you leave.`, `Wave to Teddy and then give him a hug.`]
  },
  {
    id: '67', scene: SCENES.BODY_MOVEMENT, word: `touch`, meaning: `触摸`, level: 'L1',
    l2: { en: `Touch your nose!`, zh: `摸摸鼻子！` },
    l3: [`Touch your toes.`, `Touch the wall.`, `Touch the ball.`],
    l4: [`Touch your nose three times.`, `Touch the red block with one finger.`, `Touch the wall and then sit on the mat.`]
  },
  {
    id: '68', scene: SCENES.BODY_MOVEMENT, word: `stand`, meaning: `站`, level: 'L1',
    l2: { en: `Stand up!`, zh: `站起来！` },
    l3: [`Stand tall.`, `Stand on one foot.`, `Stand beside Mommy.`],
    l4: [`Stand on the mat while we play.`, `Stand beside Mommy when she calls you.`, `Stand up and then reach for the ball.`]
  },
  {
    id: '69', scene: SCENES.BODY_MOVEMENT, word: `pat`, meaning: `轻拍`, level: 'L1',
    l2: { en: `Pat your tummy!`, zh: `拍拍肚子！` },
    l3: [`Pat your head.`, `Pat the teddy bear.`, `Pat your knees.`],
    l4: [`Pat Teddy on the head and then hug him.`, `Pat your knees three times.`, `Pat your back gently after you sit down.`]
  },
  {
    id: '70', scene: SCENES.BODY_MOVEMENT, word: `hop`, meaning: `单脚跳`, level: 'L1',
    l2: { en: `Hop on one foot!`, zh: `单脚跳！` },
    l3: [`Hop on left foot.`, `Hop three times.`, `Hop forward.`],
    l4: [`Hop to the line and stop.`, `Hop three times when Mommy says, "Go!"`, `Hop like a bunny until you reach the mat.`]
  },
  {
    id: '71', scene: SCENES.BODY_MOVEMENT, word: `squeeze`, meaning: `挤压`, level: 'L2',
    l2: { en: `Squeeze the ball!`, zh: `捏捏球！` },
    l3: [`Squeeze the sponge.`, `Squeeze the toy.`, `Squeeze gently.`],
    l4: [`Squeeze the ball three times.`, `Squeeze the sponge over the bowl.`, `Squeeze the toy when Mommy says, "Go!"`]
  },
  {
    id: '72', scene: SCENES.BODY_MOVEMENT, word: `bend`, meaning: `弯曲`, level: 'L2',
    l2: { en: `Bend your knees!`, zh: `弯弯膝盖！` },
    l3: [`Bend your arms.`, `Bend down.`, `Bend forward.`],
    l4: [`Bend down to pick up the toy.`, `Bend your knees before you jump.`, `Bend forward and touch your toes.`]
  },
  {
    id: '73', scene: SCENES.BODY_MOVEMENT, word: `lift`, meaning: `举起；抬起`, level: 'L2',
    l2: { en: `Lift the box!`, zh: `举起盒子！` },
    l3: [`Lift your arms.`, `Lift the ball.`, `Lift it up high.`],
    l4: [`Lift the toy over your head.`, `Lift the box and carry it to Mommy.`, `Lift the ball three times and put it down.`]
  },
  {
    id: '74', scene: SCENES.BODY_MOVEMENT, word: `knock`, meaning: `敲`, level: 'L2',
    l2: { en: `Knock on the door!`, zh: `敲门！` },
    l3: [`Knock on the table.`, `Knock twice.`, `Knock softly.`],
    l4: [`Knock on the door before you come in.`, `Knock three times when you are ready.`, `Knock on the table and wait for an answer.`]
  },
  {
    id: '75', scene: SCENES.BODY_MOVEMENT, word: `tiptoe`, meaning: `踮脚走`, level: 'L2',
    l2: { en: `Tiptoe quietly!`, zh: `踮脚轻走！` },
    l3: [`Tiptoe to Mommy.`, `Tiptoe to the door.`, `Tiptoe around the chair.`],
    l4: [`Tiptoe to Teddy without making a sound.`, `Tiptoe around the chair and come back.`, `Tiptoe to Mommy when the baby is sleeping.`]
  },
  {
    id: '76', scene: SCENES.BODY_MOVEMENT, word: `squat`, meaning: `蹲下`, level: 'L2',
    l2: { en: `Squat down!`, zh: `蹲下来！` },
    l3: [`Squat slowly.`, `Squat on the mat.`, `Squat and touch the floor.`],
    l4: [`Squat down to pick up the ball.`, `Squat three times before you stand up.`, `Squat beside the box and look inside.`]
  }
];
