import { Scene, VocabularyItem } from '../types';

export const SCENES: Record<string, Scene> = {
  SELF_CARE: { en: 'Self-care', zh: '生活与自理', theme: 'self_care', color: '#A3B1C6' },
  BODY_MOVEMENT: { en: 'Body & Movement', zh: '身体与动作', theme: 'body_movement', color: '#A7B899' },
  DAILY_ROUTINES: { en: 'Daily Routines', zh: '日常与起居', theme: 'daily_routines', color: '#D4A373' },
  PLAY_SPORTS: { en: 'Play & Sports', zh: '游戏与运动', theme: 'play_sports', color: '#E9C46A' },
  CLEAN_ORGANIZE: { en: 'Clean & Organize', zh: '整理与家务', theme: 'clean_organize', color: '#8FC1B5' }
};

export const vocabularyData: VocabularyItem[] = [
  {
    id: '1', scene: SCENES.SELF_CARE, word: `brush`, meaning: `刷；刷牙`, level: 'L1',
    l2: { en: `Brush your teeth!`, zh: `刷牙！` },
    l3: [
      { en: `Brush your hair.`, zh: `梳头发。` },
      { en: `Brush your teeth slowly.`, zh: `慢慢刷牙。` },
      { en: `Brush your teeth gently.`, zh: `轻轻刷牙。` }
    ],
    l4: [
      { en: `Brush your teeth before you eat breakfast.`, zh: `吃早饭前先刷牙。` },
      { en: `Brush Teddy's teeth and then put the brush away.`, zh: `给泰迪刷好牙，再把牙刷收起来。` },
      { en: `Brush the top teeth before you brush the bottom teeth.`, zh: `先刷上面的牙，再刷下面的牙。` }
    ]
  },
  {
    id: '2', scene: SCENES.SELF_CARE, word: `comb`, meaning: `梳理`, level: 'L1',
    l2: { en: `Comb your hair!`, zh: `梳头发！` },
    l3: [
      { en: `Comb your hair slowly.`, zh: `慢慢梳头发。` },
      { en: `Comb Mommy's hair.`, zh: `给妈妈梳头发。` },
      { en: `Comb Teddy's hair.`, zh: `给泰迪梳头发。` }
    ],
    l4: [
      { en: `Comb your hair before you go to school.`, zh: `上学前先梳梳头发。` },
      { en: `Comb Teddy's hair and then put the comb away.`, zh: `给泰迪梳好头发，再把梳子收起来。` },
      { en: `Comb the back of your hair while Mommy holds a mirror for you.`, zh: `妈妈帮你拿着镜子，你梳梳后面的头发。` }
    ]
  },
  {
    id: '3', scene: SCENES.SELF_CARE, word: `pack`, meaning: `装好；收拾`, level: 'L2',
    l2: { en: `Pack your bag!`, zh: `把你的包收拾好！` },
    l3: [
      { en: `Pack your toys.`, zh: `把你的玩具装好。` },
      { en: `Pack your lunch.`, zh: `把你的午饭装好。` },
      { en: `Pack your books in the box.`, zh: `把你的书装到箱子里。` }
    ],
    l4: [
      { en: `Pack your bag before we go to school.`, zh: `上学前收拾好你的书包。` },
      { en: `Pack your favorite toys for the trip.`, zh: `把最喜欢的玩具装进去，路上玩。` },
      { en: `Pack your lunchbox in your backpack.`, zh: `把饭盒装进你的书包。` }
    ]
  },
  {
    id: '4', scene: SCENES.SELF_CARE, word: `peel`, meaning: `剥皮`, level: 'L3',
    l2: { en: `Peel the banana!`, zh: `剥香蕉！` },
    l3: [
      { en: `Peel the orange.`, zh: `剥橘子。` },
      { en: `Peel the egg.`, zh: `剥鸡蛋。` },
      { en: `Peel the potato.`, zh: `削土豆皮。` }
    ],
    l4: [
      { en: `Peel the banana before you eat it.`, zh: `吃香蕉前先剥皮。` },
      { en: `Peel the orange and put the peel in the bin.`, zh: `剥好橘子，把皮扔进垃圾桶。` },
      { en: `Peel the egg carefully before you put it on the plate.`, zh: `小心地剥好鸡蛋，再放到盘子里。` }
    ]
  },
  {
    id: '5', scene: SCENES.SELF_CARE, word: `pour`, meaning: `倒`, level: 'L2',
    l2: { en: `Pour the water!`, zh: `倒水！` },
    l3: [
      { en: `Pour the milk.`, zh: `倒牛奶。` },
      { en: `Pour some juice.`, zh: `倒点果汁。` },
      { en: `Pour water into the cup.`, zh: `把水倒进杯子里。` }
    ],
    l4: [
      { en: `Pour the milk into Mommy's cup.`, zh: `把牛奶倒进妈妈的杯子里。` },
      { en: `Pour some water into your cup before you add the powder.`, zh: `加粉之前先倒点水。` },
      { en: `Pour slowly so the water does not spill.`, zh: `慢慢倒，别让水洒出来。` }
    ]
  },
  {
    id: '6', scene: SCENES.SELF_CARE, word: `pull up`, meaning: `向上拉`, level: 'L2',
    l2: { en: `Pull up your pants!`, zh: `把裤子拉上来！` },
    l3: [
      { en: `Pull up your socks.`, zh: `把袜子拉上来。` },
      { en: `Pull the zipper up.`, zh: `拉上拉链。` },
      { en: `Pull up your sleeves.`, zh: `把袖子拉上来。` }
    ],
    l4: [
      { en: `Pull up your pants after you use the toilet.`, zh: `上完厕所把裤子提上来。` },
      { en: `Pull up your socks before you put on your shoes.`, zh: `穿鞋前先把袜子拉上来。` },
      { en: `Pull the zipper up after you put on your coat.`, zh: `穿好外套后，把拉链往上拉。` }
    ]
  },
  {
    id: '7', scene: SCENES.SELF_CARE, word: `pump`, meaning: `按压（泵）`, level: 'L2',
    l2: { en: `Pump the liquid soap.`, zh: `按压洗手液。` },
    l3: [
      { en: `Pump the shampoo.`, zh: `按压洗发水。` },
      { en: `Pump the body lotion.`, zh: `按压身体乳。` },
      { en: `Pump it twice.`, zh: `按压两次。` }
    ],
    l4: [
      { en: `Pump some liquid soap and rub your hands.`, zh: `按压一些洗手液然后搓一搓手。` },
      { en: `Pump some body lotion and rub it into your skin.`, zh: `按压一些身体乳然后涂在身上。` },
      { en: `Pump some shampoo into your hand, then work it into your hair.`, zh: `把洗发水按到手心里，再揉进头发里。` }
    ]
  },
  {
    id: '8', scene: SCENES.SELF_CARE, word: `put on`, meaning: `穿上；戴上`, level: 'L2',
    l2: { en: `Put on your socks!`, zh: `穿上你的袜子！` },
    l3: [
      { en: `Put on your hat.`, zh: `戴上帽子。` },
      { en: `Put on your coat.`, zh: `穿上外套。` },
      { en: `Put on your shoes.`, zh: `穿上鞋子。` }
    ],
    l4: [
      { en: `Put on your shoes before we go outside.`, zh: `出门前先穿上鞋子。` },
      { en: `Put on your coat when it is cold.`, zh: `天冷的时候就穿上外套。` },
      { en: `Put on your socks and then put on your shoes.`, zh: `先穿袜子，再穿鞋子。` }
    ]
  },
  {
    id: '9', scene: SCENES.SELF_CARE, word: `wipe`, meaning: `擦拭`, level: 'L1',
    l2: { en: `Wipe your mouth!`, zh: `擦擦嘴巴！` },
    l3: [
      { en: `Wipe your hands.`, zh: `擦擦手。` },
      { en: `Wipe your face.`, zh: `擦擦脸。` },
      { en: `Wipe your nose with a tissue.`, zh: `用纸巾擦擦鼻子。` }
    ],
    l4: [
      { en: `Wipe your hands after you eat.`, zh: `吃完饭后擦擦手。` },
      { en: `Wipe your hands before you touch your toys.`, zh: `摸玩具前先擦擦手。` },
      { en: `Wipe your face with a clean towel.`, zh: `用干净的毛巾擦擦脸。` }
    ]
  },
  {
    id: '10', scene: SCENES.SELF_CARE, word: `scoop`, meaning: `舀；铲取`, level: 'L3',
    l2: { en: `Scoop the rice!`, zh: `舀米饭！` },
    l3: [
      { en: `Scoop some sugar.`, zh: `舀点糖。` },
      { en: `Scoop some soup.`, zh: `舀点汤。` },
      { en: `Scoop the sand.`, zh: `铲沙子。` }
    ],
    l4: [
      { en: `Scoop the rice into your bowl.`, zh: `把米饭盛到你的碗里。` },
      { en: `Scoop three spoonfuls of rice into your bowl.`, zh: `盛三勺米饭到你的碗里。` },
      { en: `Scoop the sand into the bucket and carry it to Mommy.`, zh: `把沙子铲进桶里，拿去给妈妈。` }
    ]
  },
  {
    id: '11', scene: SCENES.SELF_CARE, word: `snap`, meaning: `按扣；扣按钮`, level: 'L3',
    l2: { en: `Snap the button!`, zh: `扣上按扣！` },
    l3: [
      { en: `Snap the buttons on your coat.`, zh: `扣上外套的按扣。` },
      { en: `Snap the pocket closed.`, zh: `把口袋扣好。` },
      { en: `Snap it closed.`, zh: `把按扣扣好。` }
    ],
    l4: [
      { en: `Snap the buttons on your coat before you go outside.`, zh: `出门前把外套的按扣扣好。` },
      { en: `Snap the pocket closed after you put the toy inside.`, zh: `把玩具放进口袋后扣好按扣。` },
      { en: `Snap the coat closed and then put on your shoes.`, zh: `扣好外套的按扣，再穿上鞋子。` }
    ]
  },
  {
    id: '12', scene: SCENES.SELF_CARE, word: `spit`, meaning: `吐出`, level: 'L2',
    l2: { en: `Spit it out!`, zh: `吐出来！` },
    l3: [
      { en: `Spit out the water.`, zh: `把水吐出来。` },
      { en: `Spit into the sink.`, zh: `吐到水池里。` },
      { en: `Spit the seeds out.`, zh: `把籽吐出来。` }
    ],
    l4: [
      { en: `Spit the toothpaste into the sink.`, zh: `把牙膏沫吐到水池里。` },
      { en: `Spit out the water when you finish gargling.`, zh: `漱完口把水吐出来。` },
      { en: `Spit out the seeds when you eat the watermelon.`, zh: `吃西瓜的时候把籽吐出来。` }
    ]
  },
  {
    id: '13', scene: SCENES.SELF_CARE, word: `squeeze`, meaning: `挤；挤压`, level: 'L2',
    l2: { en: `Squeeze the toothpaste.`, zh: `挤牙膏。` },
    l3: [
      { en: `Squeeze some lotion.`, zh: `挤一点牙膏到牙刷上！` },
      { en: `Squeeze a little liquid soap.`, zh: `挤一点洗手液在手心里。` },
      { en: `Squeeze a little shampoo.`, zh: `挤一点洗发水在手里。` }
    ],
    l4: [
      { en: `Squeeze out the toothpaste, then close the cap.`, zh: `挤出牙膏，然后盖好盖子。` },
      { en: `Squeeze liquid soap into your palm, then rub it in.`, zh: `把洗手液挤到手心里，然后揉搓开。` },
      { en: `Wet your hair, then squeeze out some shampoo.`, zh: `先打湿头发，再挤出一些洗发水。` }
    ]
  },
  {
    id: '14', scene: SCENES.SELF_CARE, word: `stir`, meaning: `搅拌`, level: 'L2',
    l2: { en: `Stir the soup!`, zh: `搅搅汤！` },
    l3: [
      { en: `Stir the milk.`, zh: `搅一搅牛奶。` },
      { en: `Stir the soup slowly.`, zh: `慢慢搅汤。` },
      { en: `Stir with a spoon.`, zh: `用勺子搅一搅。` }
    ],
    l4: [
      { en: `Stir the soup three times before you taste it.`, zh: `尝汤前先搅三下。` },
      { en: `Stir the milk after you add the powder.`, zh: `加粉之后搅一搅牛奶。` },
      { en: `Stir the soup and then put the spoon on the table.`, zh: `搅好汤，再把勺子放到桌上。` }
    ]
  },
  {
    id: '15', scene: SCENES.SELF_CARE, word: `take off`, meaning: `脱下；取下`, level: 'L2',
    l2: { en: `Take off your shoes!`, zh: `脱下鞋！` },
    l3: [
      { en: `Take off your hat.`, zh: `摘下帽子。` },
      { en: `Take off your coat.`, zh: `脱下外套。` },
      { en: `Take off your socks.`, zh: `脱下袜子。` }
    ],
    l4: [
      { en: `Take off your shoes when you come inside.`, zh: `进屋的时候脱下鞋子。` },
      { en: `Take off your coat before you sit down.`, zh: `坐下前先脱下外套。` },
      { en: `Take off your socks and put them in the basket.`, zh: `脱下袜子，放进篮子里。` }
    ]
  },
  {
    id: '16', scene: SCENES.SELF_CARE, word: `take out`, meaning: `取出；拿出`, level: 'L2',
    l2: { en: `Take out the spoon!`, zh: `把勺子拿出来！` },
    l3: [
      { en: `Take out the cup.`, zh: `把杯子拿出来。` },
      { en: `Take out your clothes.`, zh: `把你的衣服拿出来。` },
      { en: `Take out the toy.`, zh: `把玩具拿出来。` }
    ],
    l4: [
      { en: `Take out the spoon before you eat.`, zh: `吃饭前先把勺子拿出来。` },
      { en: `Take out the toy and put it on the table.`, zh: `把玩具拿出来，放到桌上。` },
      { en: `Take out the red cup when Mommy asks for it.`, zh: `妈妈要的时候把红色杯子拿出来。` }
    ]
  },
  {
    id: '17', scene: SCENES.SELF_CARE, word: `tie`, meaning: `系；打结`, level: 'L3',
    l2: { en: `Tie your shoes!`, zh: `系鞋带！` },
    l3: [
      { en: `Tie the ribbon.`, zh: `系上丝带。` },
      { en: `Tie the trash bag.`, zh: `扎好垃圾袋。` },
      { en: `Tie a bow.`, zh: `打个蝴蝶结。` }
    ],
    l4: [
      { en: `Tie your shoes before you go outside.`, zh: `出门前系好鞋带。` },
      { en: `Tie the ribbon around the box.`, zh: `把丝带系在盒子上。` },
      { en: `Put on your shoes and then tie your shoelaces.`, zh: `穿上鞋子，然后系好鞋带。` }
    ]
  },
  {
    id: '18', scene: SCENES.SELF_CARE, word: `tuck`, meaning: `塞；掖`, level: 'L3',
    l2: { en: `Tuck in your shirt!`, zh: `把衬衫下摆塞好！` },
    l3: [
      { en: `Tuck baby in.`, zh: `给宝宝掖好被子。` },
      { en: `Tuck in the blanket.`, zh: `掖好毯子。` },
      { en: `Tuck in the corners.`, zh: `把四个角掖好。` }
    ],
    l4: [
      { en: `Tuck in your shirt before you go to school.`, zh: `上学前把衬衫塞好。` },
      { en: `Tuck Teddy under the blanket before bed.`, zh: `睡觉前给泰迪掖好毯子。` },
      { en: `Tuck in the corners after you make the bed.`, zh: `铺好床后把四个角掖好。` }
    ]
  },
  {
    id: '19', scene: SCENES.SELF_CARE, word: `wrap`, meaning: `包裹；卷`, level: 'L2',
    l2: { en: `Wrap your neck.`, zh: `把脖子包裹起来` },
    l3: [
      { en: `Wrap the birthday gift.`, zh: `包裹生日礼物。` },
      { en: `Wrap the scarf around your neck.`, zh: `把围巾包裹在脖子上。` },
      { en: `Wrap your toy doll.`, zh: `把你的玩偶包起来。` }
    ],
    l4: [
      { en: `Wrap yourself in a bath towel after taking a shower.`, zh: `洗完澡后裹一条浴巾。` },
      { en: `Wrap the gift in yellow wrapping paper.`, zh: `用黄色包装纸把礼物包起来。` },
      { en: `Wrap yourself in a blanket, then sit on the bed.`, zh: `用毯子裹住自己，然后坐在床上。` }
    ]
  },
  {
    id: '20', scene: SCENES.SELF_CARE, word: `zip`, meaning: `拉拉链`, level: 'L2',
    l2: { en: `Zip up your coat!`, zh: `拉上外套拉链！` },
    l3: [
      { en: `Zip up your jacket.`, zh: `拉上你的夹克拉链。` },
      { en: `Zip the bag.`, zh: `拉上包的拉链。` },
      { en: `Zip it up slowly.`, zh: `慢慢把拉链拉上。` }
    ],
    l4: [
      { en: `Zip up your coat before you go outside.`, zh: `出门前把外套拉链拉上。` },
      { en: `Zip the bag after you put the toys inside.`, zh: `把玩具放进包里后拉上拉链。` },
      { en: `Zip up your jacket when you feel cold.`, zh: `觉得冷就把夹克拉链拉上。` }
    ]
  },
  {
    id: '21', scene: SCENES.BODY_MOVEMENT, word: `bend`, meaning: `弯曲`, level: 'L2',
    l2: { en: `Bend your knees!`, zh: `弯弯膝盖！` },
    l3: [
      { en: `Bend your arms.`, zh: `弯弯手臂。` },
      { en: `Bend down.`, zh: `弯下腰。` },
      { en: `Bend forward.`, zh: `身体前倾。` }
    ],
    l4: [
      { en: `Bend down to pick up the toy.`, zh: `弯下腰把玩具捡起来。` },
      { en: `Bend your knees before you jump.`, zh: `跳之前先屈膝。` },
      { en: `Bend forward and touch your toes.`, zh: `身体前倾，摸摸脚趾。` }
    ]
  },
  {
    id: '22', scene: SCENES.BODY_MOVEMENT, word: `clap`, meaning: `拍手`, level: 'L1',
    l2: { en: `Clap your hands!`, zh: `拍拍手！` },
    l3: [
      { en: `Clap slowly.`, zh: `慢慢拍手。` },
      { en: `Clap three times.`, zh: `拍三下手。` },
      { en: `Clap loudly.`, zh: `大声拍手。` }
    ],
    l4: [
      { en: `Clap three times when you hear the bell.`, zh: `听到铃声就拍三下手。` },
      { en: `Clap above your head and then sit down.`, zh: `在头顶拍手，然后坐下。` },
      { en: `Clap with Mommy when the music starts.`, zh: `音乐响起时和妈妈一起拍手。` }
    ]
  },
  {
    id: '23', scene: SCENES.BODY_MOVEMENT, word: `crawl`, meaning: `爬行`, level: 'L1',
    l2: { en: `Crawl like a baby!`, zh: `像小宝宝一样爬！` },
    l3: [
      { en: `Crawl under the table.`, zh: `从桌子下面爬过去。` },
      { en: `Crawl to Mommy.`, zh: `爬到妈妈那里。` },
      { en: `Crawl around.`, zh: `爬来爬去。` }
    ],
    l4: [
      { en: `Crawl through the tunnel and come back.`, zh: `爬过隧道，再爬回来。` },
      { en: `Crawl to the teddy bear under the chair.`, zh: `爬到椅子下面的泰迪熊那里。` },
      { en: `Crawl under the table when Mommy says, “Go!”`, zh: `妈妈说“开始！”时从桌子下面爬过去。` }
    ]
  },
  {
    id: '24', scene: SCENES.BODY_MOVEMENT, word: `hop`, meaning: `单脚跳`, level: 'L1',
    l2: { en: `Hop on one foot!`, zh: `单脚跳！` },
    l3: [
      { en: `Hop on your left foot.`, zh: `用左脚单脚跳。` },
      { en: `Hop three times.`, zh: `跳三下。` },
      { en: `Hop forward.`, zh: `往前跳。` }
    ],
    l4: [
      { en: `Hop to the line and stop.`, zh: `跳到那条线，然后停下。` },
      { en: `Hop three times when Mommy says, “Go!”`, zh: `妈妈说“开始！”时跳三下。` },
      { en: `Hop like a bunny until you reach the mat.`, zh: `像小兔子一样跳，一直跳到垫子那里。` }
    ]
  },
  {
    id: '25', scene: SCENES.BODY_MOVEMENT, word: `knock`, meaning: `敲`, level: 'L2',
    l2: { en: `Knock on the door!`, zh: `敲敲门！` },
    l3: [
      { en: `Knock on the table.`, zh: `敲敲桌子。` },
      { en: `Knock twice.`, zh: `敲两下。` },
      { en: `Knock softly.`, zh: `轻轻敲。` }
    ],
    l4: [
      { en: `Knock on the door before you come in.`, zh: `进来前先敲门。` },
      { en: `Knock three times when you are ready.`, zh: `准备好了就敲三下。` },
      { en: `Knock on the table and wait for an answer.`, zh: `敲敲桌子，等着回应。` }
    ]
  },
  {
    id: '26', scene: SCENES.BODY_MOVEMENT, word: `lift`, meaning: `举起；抬起`, level: 'L2',
    l2: { en: `Lift the box!`, zh: `抬起箱子！` },
    l3: [
      { en: `Lift your arms.`, zh: `抬起手臂。` },
      { en: `Lift the ball.`, zh: `举起球。` },
      { en: `Lift it up high.`, zh: `把它举得高高的。` }
    ],
    l4: [
      { en: `Lift the toy over your head.`, zh: `把玩具举过头顶。` },
      { en: `Lift the box and carry it to Mommy.`, zh: `抬起箱子，拿去给妈妈。` },
      { en: `Lift the ball and put it down three times.`, zh: `把球举起了再放下三次。` }
    ]
  },
  {
    id: '27', scene: SCENES.BODY_MOVEMENT, word: `nod`, meaning: `点头`, level: 'L1',
    l2: { en: `Nod your head!`, zh: `点点头！` },
    l3: [
      { en: `Nod slowly.`, zh: `慢慢点头。` },
      { en: `Nod three times.`, zh: `点三下头。` },
      { en: `Nod your head to say yes.`, zh: `点头说“是”。` }
    ],
    l4: [
      { en: `Nod your head when the answer is yes.`, zh: `答案是“是”的时候就点头。` },
      { en: `Nod your head when Mommy calls your name.`, zh: `妈妈叫你名字的时候点一下头。` },
      { en: `Nod to Daddy and then wave goodbye.`, zh: `对爸爸点点头，然后挥手再见。` }
    ]
  },
  {
    id: '28', scene: SCENES.BODY_MOVEMENT, word: `pass`, meaning: `递；传递`, level: 'L2',
    l2: { en: `Pass the cup!`, zh: `把杯子递过来！` },
    l3: [
      { en: `Pass the spoon.`, zh: `把勺子递过去。` },
      { en: `Pass the ball.`, zh: `把球传过去。` },
      { en: `Pass it to Mommy.`, zh: `把它递给妈妈。` }
    ],
    l4: [
      { en: `Pass the cup to Daddy when he asks for it.`, zh: `爸爸要杯子的时候就把杯子递给他。` },
      { en: `Pass the ball to Mommy and then sit down.`, zh: `把球传给妈妈，然后坐下。` },
      { en: `Pass the red block to me when I say, “Go!”`, zh: `我说“开始！”时把红色积木递给我。` }
    ]
  },
  {
    id: '29', scene: SCENES.BODY_MOVEMENT, word: `peek`, meaning: `偷看；探头看`, level: 'L2',
    l2: { en: `Peek through your fingers!`, zh: `从手指缝里偷看！` },
    l3: [
      { en: `Peek behind the door.`, zh: `从门后偷偷看。` },
      { en: `Peek under the blanket.`, zh: `从毯子下面偷偷看。` },
      { en: `Peek at Teddy.`, zh: `偷偷看一眼泰迪。` }
    ],
    l4: [
      { en: `Peek behind the door and see who is there.`, zh: `从门后偷偷看，看看是谁。` },
      { en: `Hide under the blanket and peek out.`, zh: `躲在毯子下面，偷偷往外看。` },
      { en: `Peek at Teddy and then close your eyes.`, zh: `偷看泰迪一眼，然后闭上眼睛。` }
    ]
  },
  {
    id: '30', scene: SCENES.BODY_MOVEMENT, word: `point`, meaning: `指`, level: 'L1',
    l2: { en: `Point to the car!`, zh: `指一指车！` },
    l3: [
      { en: `Point to Mommy.`, zh: `指指妈妈。` },
      { en: `Point to the ball.`, zh: `指指球。` },
      { en: `Point up.`, zh: `往上指。` }
    ],
    l4: [
      { en: `Point to the red block on the table.`, zh: `指指桌子上的红积木。` },
      { en: `Point to Mommy when you hear her name.`, zh: `听到妈妈的名字就指指她。` },
      { en: `Point to the door and then walk over to it.`, zh: `指指门，然后走过去。` }
    ]
  },
  {
    id: '31', scene: SCENES.BODY_MOVEMENT, word: `shake`, meaning: `摇动`, level: 'L1',
    l2: { en: `Shake your head!`, zh: `摇摇头！` },
    l3: [
      { en: `Shake your hands.`, zh: `摇摇手。` },
      { en: `Shake the toy.`, zh: `摇一摇玩具。` },
      { en: `Shake your head slowly.`, zh: `慢慢摇头。` }
    ],
    l4: [
      { en: `Shake the rattle when you hear the music.`, zh: `听到音乐就摇响铃。` },
      { en: `Shake your hands and then clap.`, zh: `晃晃手，然后拍手。` },
      { en: `Shake the toy three times and put it down.`, zh: `摇三下玩具，然后放下。` }
    ]
  },
  {
    id: '32', scene: SCENES.BODY_MOVEMENT, word: `sit`, meaning: `坐`, level: 'L1',
    l2: { en: `Sit down!`, zh: `坐下来！` },
    l3: [
      { en: `Sit on the chair.`, zh: `坐在椅子上。` },
      { en: `Sit on the floor.`, zh: `坐在地上。` },
      { en: `Sit beside Mommy.`, zh: `坐在妈妈旁边。` }
    ],
    l4: [
      { en: `Sit on the mat while we read the book.`, zh: `我们读书的时候，坐在垫子上。` },
      { en: `Sit beside Mommy when you are ready.`, zh: `准备好了就坐到妈妈旁边。` },
      { en: `Sit on the chair and wait for Daddy.`, zh: `坐在椅子上等爸爸。` }
    ]
  },
  {
    id: '33', scene: SCENES.BODY_MOVEMENT, word: `squat`, meaning: `蹲下`, level: 'L2',
    l2: { en: `Squat down!`, zh: `蹲下来！` },
    l3: [
      { en: `Squat slowly.`, zh: `慢慢蹲下。` },
      { en: `Squat on the mat.`, zh: `蹲在垫子上。` },
      { en: `Squat and touch the floor.`, zh: `蹲下，摸摸地板。` }
    ],
    l4: [
      { en: `Squat down to pick up the ball.`, zh: `蹲下把球捡起来。` },
      { en: `Squat three times before you stand up.`, zh: `站起来之前蹲三下。` },
      { en: `Squat beside the box and look inside.`, zh: `蹲在箱子旁边，往里看。` }
    ]
  },
  {
    id: '34', scene: SCENES.BODY_MOVEMENT, word: `stand`, meaning: `站`, level: 'L1',
    l2: { en: `Stand up!`, zh: `站起来！` },
    l3: [
      { en: `Stand tall.`, zh: `站直。` },
      { en: `Stand on one foot.`, zh: `单脚站立。` },
      { en: `Stand beside Mommy.`, zh: `站在妈妈旁边。` }
    ],
    l4: [
      { en: `Stand on the mat while we play.`, zh: `我们玩的时候你站在垫子上。` },
      { en: `Stand beside Mommy when she calls you.`, zh: `妈妈叫你的时候站到她旁边。` },
      { en: `Stand up and then reach for the ball.`, zh: `站起来，然后伸手去够球。` }
    ]
  },
  {
    id: '35', scene: SCENES.BODY_MOVEMENT, word: `stomp`, meaning: `跺脚`, level: 'L1',
    l2: { en: `Stomp your feet!`, zh: `跺跺脚！` },
    l3: [
      { en: `Stomp slowly.`, zh: `慢慢跺脚。` },
      { en: `Stomp three times.`, zh: `跺三下脚。` },
      { en: `Stomp on the floor.`, zh: `在地板上跺脚。` }
    ],
    l4: [
      { en: `Stomp three times when Mommy says, “Go!”`, zh: `妈妈说“开始！”时跺三下脚。` },
      { en: `Stomp your feet and then freeze.`, zh: `跺跺脚，然后定住不动。` },
      { en: `Stomp on the floor when you hear the drum.`, zh: `听到鼓声就在地板上跺脚。` }
    ]
  },
  {
    id: '36', scene: SCENES.BODY_MOVEMENT, word: `stretch`, meaning: `伸展`, level: 'L1',
    l2: { en: `Stretch your arms!`, zh: `伸伸胳膊！` },
    l3: [
      { en: `Stretch your legs.`, zh: `伸展你的腿。` },
      { en: `Stretch up high.`, zh: `向上伸展。` },
      { en: `Stretch your back.`, zh: `伸展你的背。` }
    ],
    l4: [
      { en: `Stretch your arms before you start running.`, zh: `跑步前先伸展手臂。` },
      { en: `Stretch up high and touch the ceiling.`, zh: `向上伸展，碰碰天花板。` },
      { en: `Stretch your legs after you wake up.`, zh: `醒来后伸展一下双腿。` }
    ]
  },
  {
    id: '37', scene: SCENES.BODY_MOVEMENT, word: `tiptoe`, meaning: `踮脚走`, level: 'L2',
    l2: { en: `Tiptoe quietly!`, zh: `踮着脚轻轻走！` },
    l3: [
      { en: `Tiptoe to Mommy.`, zh: `踮着脚走到妈妈那里。` },
      { en: `Tiptoe to the door.`, zh: `踮着脚走到门口。` },
      { en: `Tiptoe around the chair.`, zh: `踮着脚绕过椅子。` }
    ],
    l4: [
      { en: `Tiptoe to Teddy without making a sound.`, zh: `踮着脚走到泰迪那里，别出声。` },
      { en: `Tiptoe around the chair and come back.`, zh: `踮着脚绕过椅子，再回来。` },
      { en: `Tiptoe to Mommy when the baby is sleeping.`, zh: `宝宝睡觉的时候，踮着脚走到妈妈那里。` }
    ]
  },
  {
    id: '38', scene: SCENES.BODY_MOVEMENT, word: `touch`, meaning: `摸；触碰`, level: 'L1',
    l2: { en: `Touch your nose!`, zh: `摸摸鼻子！` },
    l3: [
      { en: `Touch your toes.`, zh: `摸摸你的脚趾。` },
      { en: `Touch the wall.`, zh: `摸摸墙。` },
      { en: `Touch the ball.`, zh: `摸摸球。` }
    ],
    l4: [
      { en: `Touch your nose three times.`, zh: `摸摸鼻子三下。` },
      { en: `Touch the red block with one finger.`, zh: `用一个手指摸摸红积木。` },
      { en: `Touch the wall and then sit on the mat.`, zh: `摸摸墙，然后坐到垫子上。` }
    ]
  },
  {
    id: '39', scene: SCENES.BODY_MOVEMENT, word: `walk`, meaning: `走`, level: 'L1',
    l2: { en: `Walk slowly!`, zh: `慢慢走！` },
    l3: [
      { en: `Walk to the door.`, zh: `走到门口。` },
      { en: `Walk backwards.`, zh: `倒退着走。` },
      { en: `Walk in a circle.`, zh: `绕圈走。` }
    ],
    l4: [
      { en: `Walk into the room and close the door.`, zh: `走进房间然后关上门。` },
      { en: `Walk to Mommy and give her a hug.`, zh: `走到妈妈身边，给她一个拥抱。` },
      { en: `Walk like a little penguin and waddle to the door.`, zh: `像一只小企鹅一样摇摇晃晃地走到门口。` }
    ]
  },
  {
    id: '40', scene: SCENES.BODY_MOVEMENT, word: `wave`, meaning: `挥手`, level: 'L1',
    l2: { en: `Wave hello!`, zh: `挥手打招呼！` },
    l3: [
      { en: `Wave goodbye.`, zh: `挥手再见。` },
      { en: `Wave to Mommy.`, zh: `向妈妈挥手。` },
      { en: `Wave your hands.`, zh: `挥挥你的手。` }
    ],
    l4: [
      { en: `Wave to Mommy when she comes in.`, zh: `妈妈进来的时候就向她挥手。` },
      { en: `Wave goodbye before you leave.`, zh: `离开前挥手再见。` },
      { en: `Wave to Teddy and then give him a hug.`, zh: `向泰迪挥挥手，再抱抱它。` }
    ]
  },
  {
    id: '41', scene: SCENES.DAILY_ROUTINES, word: `bite`, meaning: `咬；吃一口`, level: 'L2',
    l2: { en: `Take a bite!`, zh: `咬一口！` },
    l3: [
      { en: `Take a bite of the apple.`, zh: `咬一口苹果。` },
      { en: `Take a small bite.`, zh: `咬一小口。` },
      { en: `Take another bite.`, zh: `再咬一口。` }
    ],
    l4: [
      { en: `Take a small bite before you take another one.`, zh: `先咬一小口，再咬下一口。` },
      { en: `Take three bites and then drink some water.`, zh: `咬三口，然后喝点水。` },
      { en: `Take a bite of the apple before you eat the banana.`, zh: `先咬一口苹果，再吃香蕉。` }
    ]
  },
  {
    id: '42', scene: SCENES.DAILY_ROUTINES, word: `blow`, meaning: `吹`, level: 'L1',
    l2: { en: `Blow on the soup!`, zh: `吹吹汤！` },
    l3: [
      { en: `Blow on your food.`, zh: `对着食物吹一吹。` },
      { en: `Blow bubbles.`, zh: `吹泡泡。` },
      { en: `Blow out the candle.`, zh: `吹灭蜡烛。` }
    ],
    l4: [
      { en: `Blow on the soup before you taste it.`, zh: `喝汤前先吹一吹。` },
      { en: `Blow gently to make a big bubble.`, zh: `轻轻吹一个大泡泡。` },
      { en: `Blow out the candle when Mommy says, “Go!”`, zh: `妈妈说“开始！”时就吹灭蜡烛。` }
    ]
  },
  {
    id: '43', scene: SCENES.DAILY_ROUTINES, word: `chew`, meaning: `咀嚼`, level: 'L2',
    l2: { en: `Chew your food!`, zh: `嚼嚼食物！` },
    l3: [
      { en: `Chew slowly.`, zh: `慢慢嚼。` },
      { en: `Chew the apple.`, zh: `嚼苹果。` },
      { en: `Chew your food well.`, zh: `把食物嚼碎。` }
    ],
    l4: [
      { en: `Chew each bite slowly before you swallow.`, zh: `每一口都慢慢嚼，再咽下去。` },
      { en: `Chew your food well before you take another bite.`, zh: `把食物嚼碎，再咬下一口。` },
      { en: `Chew the apple and then drink some water.`, zh: `嚼完苹果，再喝点水。` }
    ]
  },
  {
    id: '44', scene: SCENES.DAILY_ROUTINES, word: `close`, meaning: `关闭`, level: 'L1',
    l2: { en: `Close the door!`, zh: `关上门！` },
    l3: [
      { en: `Close the window.`, zh: `关上窗户。` },
      { en: `Close the book.`, zh: `合上书。` },
      { en: `Close your eyes.`, zh: `闭上你的眼睛。` }
    ],
    l4: [
      { en: `Close the book when the story is finished.`, zh: `故事讲完就合上书。` },
      { en: `Close the window before you go to bed.`, zh: `睡觉前关上窗户。` },
      { en: `Close the box and put it on the shelf.`, zh: `关上盒子，把它放到架子上。` }
    ]
  },
  {
    id: '45', scene: SCENES.DAILY_ROUTINES, word: `drink`, meaning: `喝`, level: 'L1',
    l2: { en: `Drink some water!`, zh: `喝点水！` },
    l3: [
      { en: `Drink your milk.`, zh: `喝牛奶。` },
      { en: `Drink some juice.`, zh: `喝点果汁。` },
      { en: `Drink from your cup.`, zh: `用你的杯子喝水。` }
    ],
    l4: [
      { en: `Drink your milk before you leave for school.`, zh: `上学前把牛奶喝完。` },
      { en: `Drink some water when you feel thirsty.`, zh: `口渴的时候就喝点水。` },
      { en: `Drink from your cup and then put it on the table.`, zh: `用杯子喝完水，再把它放到桌上。` }
    ]
  },
  {
    id: '46', scene: SCENES.DAILY_ROUTINES, word: `hold`, meaning: `拿；握住`, level: 'L1',
    l2: { en: `Hold the cup!`, zh: `拿住杯子！` },
    l3: [
      { en: `Hold the spoon.`, zh: `拿着勺子。` },
      { en: `Hold my hand.`, zh: `牵着我的手。` },
      { en: `Hold the toy.`, zh: `拿着玩具。` }
    ],
    l4: [
      { en: `Hold the cup with two hands.`, zh: `用两只手拿杯子。` },
      { en: `Hold my hand when we cross the street.`, zh: `过马路的时候牵着我的手。` },
      { en: `Hold Teddy while you walk to the sofa.`, zh: `抱着泰迪走到沙发那边。` }
    ]
  },
  {
    id: '47', scene: SCENES.DAILY_ROUTINES, word: `hug`, meaning: `拥抱`, level: 'L1',
    l2: { en: `Hug Mommy!`, zh: `抱抱妈妈！` },
    l3: [
      { en: `Hug Daddy.`, zh: `抱抱爸爸。` },
      { en: `Hug your teddy bear.`, zh: `抱抱你的泰迪熊。` },
      { en: `Give me a hug.`, zh: `抱抱我。` }
    ],
    l4: [
      { en: `Hug Teddy before you go to bed.`, zh: `睡觉前抱抱泰迪。` },
      { en: `Give Mommy a hug when you see her.`, zh: `看到妈妈就抱抱她。` },
      { en: `Hug your teddy bear and sit on the bed.`, zh: `抱抱你的小熊，坐在床上。` }
    ]
  },
  {
    id: '48', scene: SCENES.DAILY_ROUTINES, word: `kiss`, meaning: `亲吻`, level: 'L1',
    l2: { en: `Kiss Mommy!`, zh: `亲亲妈妈！` },
    l3: [
      { en: `Kiss Daddy.`, zh: `亲亲爸爸。` },
      { en: `Kiss your teddy bear.`, zh: `亲亲你的小熊。` },
      { en: `Give me a kiss.`, zh: `亲亲我。` }
    ],
    l4: [
      { en: `Kiss Teddy before you go to bed.`, zh: `睡觉前亲亲泰迪。` },
      { en: `Give Mommy a kiss when she comes home.`, zh: `妈妈回家就亲亲她。` },
      { en: `Kiss Teddy good night and turn off the light.`, zh: `亲亲泰迪说晚安，然后关灯。` }
    ]
  },
  {
    id: '49', scene: SCENES.DAILY_ROUTINES, word: `lie down`, meaning: `躺下`, level: 'L1',
    l2: { en: `Lie down on the mat!`, zh: `躺在垫子上！` },
    l3: [
      { en: `Lie down on the bed.`, zh: `躺在床上。` },
      { en: `Lie down next to Teddy.`, zh: `躺在泰迪旁边。` },
      { en: `Lie down here.`, zh: `躺在这里。` }
    ],
    l4: [
      { en: `Lie down on the bed before the story starts.`, zh: `故事开始前先躺到床上。` },
      { en: `Lie down on the mat and close your eyes.`, zh: `躺在垫子上，闭上眼睛。` },
      { en: `Lie down here when you are ready to rest.`, zh: `准备休息的时候就躺在这里。` }
    ]
  },
  {
    id: '50', scene: SCENES.DAILY_ROUTINES, word: `listen`, meaning: `听`, level: 'L1',
    l2: { en: `Listen to me!`, zh: `听我说！` },
    l3: [
      { en: `Listen to the music.`, zh: `听音乐。` },
      { en: `Listen to the bird.`, zh: `听小鸟叫。` },
      { en: `Listen to Mommy.`, zh: `听妈妈说话。` }
    ],
    l4: [
      { en: `Listen to Mommy before you start the game.`, zh: `开始游戏前先听妈妈说。` },
      { en: `Listen for the bell and then clap.`, zh: `听听铃声，然后拍拍手。` },
      { en: `Listen to the music while you dance.`, zh: `一边跳舞，一边听音乐。` }
    ]
  },
  {
    id: '51', scene: SCENES.DAILY_ROUTINES, word: `open`, meaning: `打开`, level: 'L1',
    l2: { en: `Open the door!`, zh: `打开门！` },
    l3: [
      { en: `Open the window.`, zh: `打开窗户。` },
      { en: `Open the book.`, zh: `打开书。` },
      { en: `Open your eyes.`, zh: `睁开你的眼睛。` }
    ],
    l4: [
      { en: `Open the book and turn on the lamp.`, zh: `把书翻开，然后打开台灯。` },
      { en: `Open the box when Mommy says, “Go!”`, zh: `妈妈说“开始！”时就打开盒子。` },
      { en: `Open the window before we read the story.`, zh: `读故事前先打开窗户。` }
    ]
  },
  {
    id: '52', scene: SCENES.DAILY_ROUTINES, word: `read`, meaning: `阅读`, level: 'L1',
    l2: { en: `Read the book!`, zh: `读书！` },
    l3: [
      { en: `Read a story.`, zh: `读个故事。` },
      { en: `Read with Mommy.`, zh: `和妈妈一起读。` },
      { en: `Read this page.`, zh: `读这一页。` }
    ],
    l4: [
      { en: `Read the story before you go to bed.`, zh: `睡觉前读这个故事。` },
      { en: `Read this page and point to the picture.`, zh: `读这一页，指指图画。` },
      { en: `Read with Mommy and tell her what you see.`, zh: `和妈妈一起读，告诉她你看到了什么。` }
    ]
  },
  {
    id: '53', scene: SCENES.DAILY_ROUTINES, word: `rub`, meaning: `揉；搓`, level: 'L1',
    l2: { en: `Rub your hands!`, zh: `搓一搓手！` },
    l3: [
      { en: `Rub your face.`, zh: `用毛巾轻轻擦擦脸颊。` },
      { en: `Rub your eyes gently.`, zh: `轻轻揉揉眼睛。` },
      { en: `Rub your hands with a towel.`, zh: `用毛巾擦擦手。` }
    ],
    l4: [
      { en: `Rub your hands together when they feel cold.`, zh: `手冷的时候就搓搓手。` },
      { en: `Rub your face with the towel after you wash it.`, zh: `洗完脸后用毛巾擦擦脸。` },
      { en: `Rub your hands and then dry them with the towel.`, zh: `搓搓手，再用毛巾擦干。` }
    ]
  },
  {
    id: '54', scene: SCENES.DAILY_ROUTINES, word: `smile`, meaning: `微笑`, level: 'L1',
    l2: { en: `Smile at Mommy!`, zh: `对妈妈笑一笑！` },
    l3: [
      { en: `Give me a smile.`, zh: `对我笑一笑。` },
      { en: `Smile for the camera.`, zh: `对着相机笑一笑。` },
      { en: `Smile big.`, zh: `露出大大的笑容。` }
    ],
    l4: [
      { en: `Smile at Teddy when you give him a hug.`, zh: `抱泰迪的时候就对它笑一笑。` },
      { en: `Smile when you see your favorite toy.`, zh: `看到最喜欢的玩具就笑一笑。` },
      { en: `Smile for Mommy and then wave goodbye.`, zh: `对妈妈笑一笑，然后挥手再见。` }
    ]
  },
  {
    id: '55', scene: SCENES.DAILY_ROUTINES, word: `smell`, meaning: `闻`, level: 'L1',
    l2: { en: `Smell the soup!`, zh: `闻闻汤！` },
    l3: [
      { en: `Smell the flower.`, zh: `闻闻花。` },
      { en: `Smell the food.`, zh: `闻闻食物。` },
      { en: `Smell the soap.`, zh: `闻闻肥皂。` }
    ],
    l4: [
      { en: `Smell the soup before you taste it.`, zh: `尝汤之前先闻一闻。` },
      { en: `Smell the flower and tell me if you like it.`, zh: `闻闻花，告诉我你喜不喜欢。` },
      { en: `Smell the food and guess what we are going to eat.`, zh: `闻闻食物，猜猜我们要吃什么。` }
    ]
  },
  {
    id: '56', scene: SCENES.DAILY_ROUTINES, word: `turn off`, meaning: `关闭`, level: 'L2',
    l2: { en: `Turn off the light!`, zh: `关灯！` },
    l3: [
      { en: `Turn off the lamp.`, zh: `关掉台灯。` },
      { en: `Turn off the fan.`, zh: `关掉风扇。` },
      { en: `Turn off the music.`, zh: `关掉音乐。` }
    ],
    l4: [
      { en: `Turn off the light before you go to bed.`, zh: `睡觉前先关灯。` },
      { en: `Turn off the music when Mommy says, “Stop!”`, zh: `妈妈说“停！”时就关上音乐。` },
      { en: `Turn off the fan when you leave the room.`, zh: `离开房间时关上风扇。` }
    ]
  },
  {
    id: '57', scene: SCENES.DAILY_ROUTINES, word: `turn on`, meaning: `打开`, level: 'L2',
    l2: { en: `Turn on the light!`, zh: `开灯！` },
    l3: [
      { en: `Turn on the faucet.`, zh: `打开水龙头。` },
      { en: `Turn on the fan.`, zh: `打开风扇。` },
      { en: `Turn on the music.`, zh: `打开音乐。` }
    ],
    l4: [
      { en: `Turn on the light before you start reading.`, zh: `开始读书前先开灯。` },
      { en: `Turn on the music when Mommy says, “Go!”`, zh: `妈妈说“开始！”时就打开音乐。` },
      { en: `Turn on the fan if you feel hot.`, zh: `觉得热就打开风扇。` }
    ]
  },
  {
    id: '58', scene: SCENES.DAILY_ROUTINES, word: `wake`, meaning: `醒来`, level: 'L1',
    l2: { en: `Wake up!`, zh: `醒来！` },
    l3: [
      { en: `Wake up early.`, zh: `早点起床。` },
      { en: `Wake up slowly.`, zh: `慢慢醒来。` },
      { en: `Wake up, sleepyhead!`, zh: `起床啦，小懒虫！` }
    ],
    l4: [
      { en: `Wake up when Mommy calls you.`, zh: `妈妈叫你的时候就醒来。` },
      { en: `Wake up and stretch before you get out of bed.`, zh: `醒来后，下床前先伸伸懒腰。` },
      { en: `Wake up early so we have time for breakfast.`, zh: `早点醒来，我们才有时间吃早饭。` }
    ]
  },
  {
    id: '59', scene: SCENES.DAILY_ROUTINES, word: `screw`, meaning: `拧紧`, level: 'L2',
    l2: { en: `Screw the cap on!`, zh: `把瓶盖拧上！` },
    l3: [
      { en: `Screw the lid on tightly.`, zh: `拧紧杯盖。` },
      { en: `Screw the toothpaste cap on!`, zh: `把牙膏的盖子拧上。` },
      { en: `Screw it on tightly.`, zh: `把它拧紧` }
    ],
    l4: [
      { en: `Screw the cap back on after you drink water!`, zh: `喝完水后拧好瓶盖。` },
      { en: `Pour the milk into your cup, then screw the cap back onto the bottle.`, zh: `将牛奶倒入你的杯子，然后拧上瓶盖。` },
      { en: `Screw the cap back onto the bottle, then put the bottle on the table.`, zh: `把瓶盖拧好，再把瓶子放到桌上。` }
    ]
  },
  {
    id: '60', scene: SCENES.DAILY_ROUTINES, word: `yawn`, meaning: `打哈欠`, level: 'L1',
    l2: { en: `A big yawn!`, zh: `打一个大哈欠。` },
    l3: [
      { en: `Yawn slowly.`, zh: `慢慢打哈欠。` },
      { en: `Yawn like a sleepy bear.`, zh: `像困倦的小熊一样打哈欠。` },
      { en: `Yawn and stretch.`, zh: `打个哈欠，伸伸懒腰。` }
    ],
    l4: [
      { en: `Yawn when you feel sleepy.`, zh: `困的时候就打个哈欠。` },
      { en: `Yawn and stretch before you lie down.`, zh: `躺下前打个哈欠，伸伸懒腰。` },
      { en: `Yawn like a sleepy bear and close your eyes.`, zh: `像困倦的小熊一样打个哈欠，然后闭上眼睛。` }
    ]
  },
  {
    id: '61', scene: SCENES.PLAY_SPORTS, word: `balance`, meaning: `保持平衡`, level: 'L2',
    l2: { en: `Balance on one foot!`, zh: `单脚保持平衡！` },
    l3: [
      { en: `Balance a book on your head.`, zh: `把书在头顶放稳。` },
      { en: `Balance on the line.`, zh: `在线上保持平衡。` },
      { en: `Balance on the mat.`, zh: `在垫子上保持平衡。` }
    ],
    l4: [
      { en: `Balance on one foot for five seconds.`, zh: `单脚站立五秒钟。` },
      { en: `Balance on the line without stepping off.`, zh: `站在线上保持平衡，别踩出去。` },
      { en: `Balance like a flamingo and then switch feet.`, zh: `像火烈鸟一样单脚站立，然后换脚。` }
    ]
  },
  {
    id: '62', scene: SCENES.PLAY_SPORTS, word: `build`, meaning: `搭建；建造`, level: 'L2',
    l2: { en: `Build a bridge!`, zh: `搭一座桥！` },
    l3: [
      { en: `Build a house.`, zh: `搭一座房子。` },
      { en: `Build a tower.`, zh: `搭一座塔。` },
      { en: `Build with blocks.`, zh: `用积木搭东西。` }
    ],
    l4: [
      { en: `Build a tower with five blocks.`, zh: `用五块积木搭一座塔。` },
      { en: `Build a bridge for the toy car.`, zh: `给小汽车搭一座桥。` },
      { en: `Build a house and put Teddy inside.`, zh: `搭一座房子，把泰迪放进去。` }
    ]
  },
  {
    id: '63', scene: SCENES.PLAY_SPORTS, word: `catch`, meaning: `接住；抓住`, level: 'L2',
    l2: { en: `Catch the ball!`, zh: `接球！` },
    l3: [
      { en: `Catch the balloon.`, zh: `接住气球。` },
      { en: `Catch the beanbag.`, zh: `接住沙包。` },
      { en: `Catch it with two hands.`, zh: `用两只手接住。` }
    ],
    l4: [
      { en: `Catch the ball when Mommy throws it.`, zh: `妈妈扔球的时候就接住。` },
      { en: `Catch the balloon before it touches the floor.`, zh: `在气球落地前接住它。` },
      { en: `Catch the red ball and pass it to Daddy.`, zh: `接住红球，传给爸爸。` }
    ]
  },
  {
    id: '64', scene: SCENES.PLAY_SPORTS, word: `climb`, meaning: `爬；攀爬`, level: 'L2',
    l2: { en: `Climb up!`, zh: `爬上去！` },
    l3: [
      { en: `Climb the stairs.`, zh: `爬楼梯。` },
      { en: `Climb the ladder.`, zh: `爬梯子。` },
      { en: `Climb over the cushion.`, zh: `从软垫上爬过去。` }
    ],
    l4: [
      { en: `Climb the stairs with Mommy.`, zh: `和妈妈一起爬楼梯。` },
      { en: `Climb onto the mat and sit down.`, zh: `爬到垫子上，坐下。` },
      { en: `Climb up the ladder when Mommy says, “Go!”`, zh: `妈妈说“开始！”时往上爬梯子。` }
    ]
  },
  {
    id: '65', scene: SCENES.PLAY_SPORTS, word: `dance`, meaning: `跳舞`, level: 'L1',
    l2: { en: `Dance with me!`, zh: `和我一起跳舞！` },
    l3: [
      { en: `Dance fast.`, zh: `快快地跳舞。` },
      { en: `Dance slowly.`, zh: `慢慢地跳舞。` },
      { en: `Dance around the chair.`, zh: `绕着椅子跳舞。` }
    ],
    l4: [
      { en: `Dance when you hear the music.`, zh: `听到音乐就跳舞。` },
      { en: `Dance like a robot and then freeze.`, zh: `像机器人一样跳舞，然后定住不动。` },
      { en: `Dance around the chair three times.`, zh: `绕着椅子跳三圈。` }
    ]
  },
  {
    id: '66', scene: SCENES.PLAY_SPORTS, word: `dig`, meaning: `挖`, level: 'L1',
    l2: { en: `Dig in the sand!`, zh: `在沙子里挖！` },
    l3: [
      { en: `Dig a hole.`, zh: `挖一个洞。` },
      { en: `Dig with the shovel.`, zh: `用铲子挖。` },
      { en: `Dig in the garden.`, zh: `在花园里挖。` }
    ],
    l4: [
      { en: `Dig a hole for the toy.`, zh: `给玩具挖一个洞。` },
      { en: `Dig in the sand until you find the treasure.`, zh: `在沙子里挖，直到找到宝藏。` },
      { en: `Dig three times and put the sand in the bucket.`, zh: `挖三下，把沙子放进桶里。` }
    ]
  },
  {
    id: '67', scene: SCENES.PLAY_SPORTS, word: `hide`, meaning: `躲藏`, level: 'L1',
    l2: { en: `Hide behind the sofa!`, zh: `躲在沙发后面！` },
    l3: [
      { en: `Hide behind the chair.`, zh: `躲在椅子后面。` },
      { en: `Hide under the table.`, zh: `躲在桌子下面。` },
      { en: `Hide the teddy bear.`, zh: `把泰迪熊藏起来。` }
    ],
    l4: [
      { en: `Hide behind the door until Mommy finds you.`, zh: `躲在门后，等妈妈找到你。` },
      { en: `Hide the teddy bear under the blanket.`, zh: `把泰迪藏在毯子下面。` },
      { en: `Hide and come out when I say, “Come out!”`, zh: `先躲好，我说“出来！”时就出来。` }
    ]
  },
  {
    id: '68', scene: SCENES.PLAY_SPORTS, word: `jump`, meaning: `跳`, level: 'L1',
    l2: { en: `Jump up!`, zh: `跳起来！` },
    l3: [
      { en: `Jump high.`, zh: `跳高一点。` },
      { en: `Jump over the line.`, zh: `跳过这条线。` },
      { en: `Jump on the mat.`, zh: `在垫子上跳。` }
    ],
    l4: [
      { en: `Jump over the line three times.`, zh: `跳过这条线三次。` },
      { en: `Jump to Mommy when I say, “Go!”`, zh: `我说“开始！”时跳到妈妈这里。` },
      { en: `Jump over the blocks without touching them.`, zh: `跳过积木，别碰到它们。` }
    ]
  },
  {
    id: '69', scene: SCENES.PLAY_SPORTS, word: `kick`, meaning: `踢`, level: 'L1',
    l2: { en: `Kick the ball!`, zh: `踢球！` },
    l3: [
      { en: `Kick the ball forward.`, zh: `把球往前踢。` },
      { en: `Kick the ball to Daddy.`, zh: `把球踢给爸爸。` },
      { en: `Kick the ball gently.`, zh: `轻轻踢球。` }
    ],
    l4: [
      { en: `Kick the ball into the goal.`, zh: `把球踢进球门。` },
      { en: `Kick the red ball to Daddy.`, zh: `把红球踢给爸爸。` },
      { en: `Kick the ball when I say, “Go!”`, zh: `我说“开始！”时就踢球。` }
    ]
  },
  {
    id: '70', scene: SCENES.PLAY_SPORTS, word: `pedal`, meaning: `踩踏板`, level: 'L3',
    l2: { en: `Pedal the bike!`, zh: `踩自行车踏板！` },
    l3: [
      { en: `Pedal slowly.`, zh: `慢慢蹬。` },
      { en: `Pedal faster.`, zh: `蹬快一点。` },
      { en: `Pedal forward.`, zh: `往前蹬。` }
    ],
    l4: [
      { en: `Pedal the tricycle to Mommy.`, zh: `蹬着三轮车到妈妈那里。` },
      { en: `Pedal faster when the path is clear.`, zh: `路上没东西的时候就蹬快一点。` },
      { en: `Pedal to the line and stop.`, zh: `蹬到那条线，然后停下。` }
    ]
  },
  {
    id: '71', scene: SCENES.PLAY_SPORTS, word: `press`, meaning: `按压`, level: 'L1',
    l2: { en: `Press the button!`, zh: `按按钮！` },
    l3: [
      { en: `Press the start button.`, zh: `按开始按钮。` },
      { en: `Press the doorbell.`, zh: `按门铃。` },
      { en: `Press the play dough flat.`, zh: `把橡皮泥压扁。` }
    ],
    l4: [
      { en: `Press the red button three times.`, zh: `按红色按钮三下。` },
      { en: `Press the doorbell when you are ready.`, zh: `准备好了就按门铃。` },
      { en: `Press the play dough with one finger to make a small mark.`, zh: `用一根手指按压橡皮泥，留下一个小印子。` }
    ]
  },
  {
    id: '72', scene: SCENES.PLAY_SPORTS, word: `push`, meaning: `推`, level: 'L1',
    l2: { en: `Push the car!`, zh: `推小汽车！` },
    l3: [
      { en: `Push the box.`, zh: `推箱子。` },
      { en: `Push the door.`, zh: `推门。` },
      { en: `Push the shopping cart.`, zh: `推购物车。` }
    ],
    l4: [
      { en: `Push the box to Mommy.`, zh: `把箱子推到妈妈那里。` },
      { en: `Push the car across the floor.`, zh: `把小汽车从地板这边推到那边。` },
      { en: `Push the box when you hear the bell.`, zh: `听到铃声时就推箱子。` }
    ]
  },
  {
    id: '73', scene: SCENES.PLAY_SPORTS, word: `roll`, meaning: `滚动`, level: 'L1',
    l2: { en: `Roll the ball!`, zh: `滚球！` },
    l3: [
      { en: `Roll the ball to Mommy.`, zh: `把球滚给妈妈。` },
      { en: `Roll the ball slowly.`, zh: `慢慢滚球。` },
      { en: `Roll a snowball.`, zh: `滚一个雪球。` }
    ],
    l4: [
      { en: `Roll the ball over and then back to me.`, zh: `把球滚过去再滚回给我。` },
      { en: `Roll the ball under the chair.`, zh: `把球从椅子下面滚过去。` },
      { en: `Roll a snowball to make the snowman's head.`, zh: `滚一个雪球当作雪人的头。` }
    ]
  },
  {
    id: '74', scene: SCENES.PLAY_SPORTS, word: `run`, meaning: `跑`, level: 'L1',
    l2: { en: `Run to Mommy!`, zh: `跑向妈妈！` },
    l3: [
      { en: `Run fast.`, zh: `跑快一点。` },
      { en: `Run slowly.`, zh: `慢慢跑。` },
      { en: `Run to me.`, zh: `跑到我这里来。` }
    ],
    l4: [
      { en: `Run to Mommy when she calls you.`, zh: `妈妈叫你的时候就跑过去。` },
      { en: `Run around the chair three times.`, zh: `绕着椅子跑三圈。` },
      { en: `Run to the door and come back when I say, “Go!”`, zh: `我说“开始！”时跑到门口再跑回来。` }
    ]
  },
  {
    id: '75', scene: SCENES.PLAY_SPORTS, word: `slide`, meaning: `滑`, level: 'L1',
    l2: { en: `Slide down!`, zh: `滑下来！` },
    l3: [
      { en: `Slide down the slide.`, zh: `从滑梯上滑下来。` },
      { en: `Slide on the floor.`, zh: `在地板上滑行。` },
      { en: `Slide slowly.`, zh: `慢慢滑。` }
    ],
    l4: [
      { en: `Slide down the slide when it is your turn.`, zh: `轮到你的时候从滑梯上滑下来。` },
      { en: `Slide all the way down and stand up.`, zh: `一直滑到底，再站起来。` },
      { en: `Slide down with Mommy and then walk back.`, zh: `和妈妈一起滑下来，然后走回去。` }
    ]
  },
  {
    id: '76', scene: SCENES.PLAY_SPORTS, word: `spin`, meaning: `旋转`, level: 'L1',
    l2: { en: `Spin around!`, zh: `转一圈！` },
    l3: [
      { en: `Spin slowly.`, zh: `慢慢转圈。` },
      { en: `Spin the wheel.`, zh: `转动轮子。` },
      { en: `Spin around twice.`, zh: `转两圈。` }
    ],
    l4: [
      { en: `Spin around three times and then walk forward.`, zh: `转三圈，然后向前走。` },
      { en: `Spin the wheel when Mommy says, “Go!”`, zh: `妈妈说“开始！”时转动轮子。` },
      { en: `Spin the top and watch it move.`, zh: `转陀螺，看它转。` }
    ]
  },
  {
    id: '77', scene: SCENES.PLAY_SPORTS, word: `splash`, meaning: `泼；溅`, level: 'L1',
    l2: { en: `Splash in the water!`, zh: `拍出水花！` },
    l3: [
      { en: `Splash the water with your hands.`, zh: `用手拍打水面。` },
      { en: `Splash with your feet.`, zh: `用脚拍出水花。` },
      { en: `Splash gently.`, zh: `轻轻地拍水花。` }
    ],
    l4: [
      { en: `Splash in the water three times.`, zh: `在水里溅三下水花。` },
      { en: `Splash with your hands, and count to three.`, zh: `用手拍水，并数到三。` },
      { en: `Splash the water when Mommy says, “Go!”`, zh: `妈妈说“开始！”时就拍出水花。` }
    ]
  },
  {
    id: '78', scene: SCENES.PLAY_SPORTS, word: `swing`, meaning: `荡；摆动`, level: 'L1',
    l2: { en: `Swing your arms!`, zh: `摆动你的手臂！` },
    l3: [
      { en: `Swing your arms back and forth.`, zh: `前后摆动手臂。` },
      { en: `Swing your arms up high.`, zh: `把手臂高高举起并摆动。` },
      { en: `Swing your arms slowly.`, zh: `慢慢摆动手臂。` }
    ],
    l4: [
      { en: `Swing your arms while you march in place.`, zh: `原地踏步时摆动手臂。` },
      { en: `Swing your arms five times, then stop.`, zh: `摆动手臂五次，然后停下。` },
      { en: `Swing your arms back and forth while you sing.`, zh: `一边唱歌，一边前后摆动手臂。` }
    ]
  },
  {
    id: '79', scene: SCENES.PLAY_SPORTS, word: `throw`, meaning: `扔；投`, level: 'L2',
    l2: { en: `Throw the ball!`, zh: `扔球！` },
    l3: [
      { en: `Throw the ball to Mommy.`, zh: `把球扔给妈妈。` },
      { en: `Throw the ball high.`, zh: `把球扔得高高的。` },
      { en: `Throw the ball into the basket.`, zh: `把球扔进筐里。` }
    ],
    l4: [
      { en: `Throw the red ball to Mommy.`, zh: `把红球扔给妈妈。` },
      { en: `Throw the ball into the basket three times.`, zh: `把球扔进筐里三次。` },
      { en: `Throw the ball when I say, “Go!”`, zh: `我说“开始！”时就扔球。` }
    ]
  },
  {
    id: '80', scene: SCENES.PLAY_SPORTS, word: `tickle`, meaning: `挠痒`, level: 'L1',
    l2: { en: `Tickle Mommy!`, zh: `挠挠妈妈！` },
    l3: [
      { en: `Tickle Daddy.`, zh: `挠挠爸爸痒痒。` },
      { en: `Tickle Teddy.`, zh: `挠挠泰迪痒痒。` },
      { en: `Tickle my hand.`, zh: `挠挠我的手心。` }
    ],
    l4: [
      { en: `Tickle Mommy when she says, “Go!”`, zh: `妈妈说“开始！”时挠她痒痒。` },
      { en: `Tickle Teddy and then give him a hug.`, zh: `挠挠泰迪痒痒，再抱抱它。` },
      { en: `Tickle my hand three times and stop.`, zh: `挠我的手心三下，然后停下。` }
    ]
  },
  {
    id: '81', scene: SCENES.CLEAN_ORGANIZE, word: `clean`, meaning: `清洁`, level: 'L1',
    l2: { en: `Clean the table!`, zh: `把桌子擦干净！` },
    l3: [
      { en: `Clean the room.`, zh: `打扫房间。` },
      { en: `Clean up the toys.`, zh: `把玩具收拾干净。` },
      { en: `Clean your shoes.`, zh: `把鞋子清理干净。` }
    ],
    l4: [
      { en: `Clean up the toys after you finish playing.`, zh: `玩完玩具后把它们收拾干净。` },
      { en: `Clean your shoes before you put them away.`, zh: `收鞋子前先把它们擦干净。` },
      { en: `Clean the table before we eat.`, zh: `吃饭前把桌子收拾干净。` }
    ]
  },
  {
    id: '82', scene: SCENES.CLEAN_ORGANIZE, word: `dry`, meaning: `弄干；擦干`, level: 'L1',
    l2: { en: `Dry your hands!`, zh: `把手擦干！` },
    l3: [
      { en: `Dry the cup.`, zh: `擦干杯子。` },
      { en: `Dry the table.`, zh: `擦干桌子。` },
      { en: `Dry the dishes.`, zh: `擦干盘子。` }
    ],
    l4: [
      { en: `Dry your hands after washing them.`, zh: `洗完手后把手擦干。` },
      { en: `Dry the cup before you put it away.`, zh: `收杯子前先把它擦干。` },
      { en: `Dry your hair before you go outside.`, zh: `出门前把头发擦干。` }
    ]
  },
  {
    id: '83', scene: SCENES.CLEAN_ORGANIZE, word: `dust`, meaning: `掸灰；除尘`, level: 'L3',
    l2: { en: `Dust the table!`, zh: `掸掸桌上的灰！` },
    l3: [
      { en: `Dust the shelf.`, zh: `掸掉架子上的灰。` },
      { en: `Dust the chair.`, zh: `掸掉椅子上的灰。` },
      { en: `Dust the sofa.`, zh: `掸掉沙发上的灰。` }
    ],
    l4: [
      { en: `Dust the shelf before you put the books on it.`, zh: `放书前先掸掉架子上的灰。` },
      { en: `Dust the table with a dry cloth.`, zh: `用干抹布擦掉桌上的灰。` },
      { en: `Dust the chair after you move it.`, zh: `挪开椅子后掸掉灰。` }
    ]
  },
  {
    id: '84', scene: SCENES.CLEAN_ORGANIZE, word: `fold`, meaning: `折叠`, level: 'L2',
    l2: { en: `Fold the towel!`, zh: `叠毛巾！` },
    l3: [
      { en: `Fold the clothes.`, zh: `折衣服。` },
      { en: `Fold the paper.`, zh: `折纸。` },
      { en: `Fold the blanket.`, zh: `叠毯子。` }
    ],
    l4: [
      { en: `Fold the towel in half.`, zh: `把毛巾对折。` },
      { en: `Fold the clothes and put them away.`, zh: `把衣服折好收起来。` },
      { en: `Fold the paper before you put it in the box.`, zh: `把纸折好，再放进盒子里。` }
    ]
  },
  {
    id: '85', scene: SCENES.CLEAN_ORGANIZE, word: `hang`, meaning: `悬挂；挂起`, level: 'L2',
    l2: { en: `Hang up your coat!`, zh: `把外套挂起来！` },
    l3: [
      { en: `Hang up the towel.`, zh: `把毛巾挂起来。` },
      { en: `Hang the bag on the hook.`, zh: `把包挂到挂钩上。` },
      { en: `Hang the picture on the wall.`, zh: `把画挂在墙上。` }
    ],
    l4: [
      { en: `Hang up your coat by the door.`, zh: `把外套挂在门边。` },
      { en: `Hang the towel on the hook after you dry your hands.`, zh: `擦完手把毛巾挂在挂钩上。` },
      { en: `Hang your bag on the hook when you get home.`, zh: `回家后把包挂到挂钩上。` }
    ]
  },
  {
    id: '86', scene: SCENES.CLEAN_ORGANIZE, word: `line up`, meaning: `排成一列`, level: 'L2',
    l2: { en: `Line up the cars!`, zh: `把小汽车排成一列！` },
    l3: [
      { en: `Line up the blocks.`, zh: `把积木排成一排。` },
      { en: `Line up the books.`, zh: `把书排成一排。` },
      { en: `Line up the toys.`, zh: `把玩具排成一排。` }
    ],
    l4: [
      { en: `Line up the cars by color.`, zh: `按颜色把小汽车排好。` },
      { en: `Line up three blocks on the table.`, zh: `在桌上把三块积木排成一排。` },
      { en: `Line up the toys before you put them away.`, zh: `收玩具前先把它们排整齐。` }
    ]
  },
  {
    id: '87', scene: SCENES.CLEAN_ORGANIZE, word: `mop`, meaning: `拖地`, level: 'L3',
    l2: { en: `Mop the floor!`, zh: `拖地！` },
    l3: [
      { en: `Mop the kitchen floor.`, zh: `拖一下厨房的地板。` },
      { en: `Mop the hallway floor.`, zh: `拖一下走廊的地板。` },
      { en: `Mop up the water.`, zh: `把水拖干。` }
    ],
    l4: [
      { en: `Mop the floor after the water spills.`, zh: `水洒了以后拖地。` },
      { en: `Mop the kitchen floor before dinner.`, zh: `晚饭前拖厨房的地板。` },
      { en: `Mop the wet floor carefully so nobody slips.`, zh: `小心地拖湿地，别让人滑倒。` }
    ]
  },
  {
    id: '88', scene: SCENES.CLEAN_ORGANIZE, word: `organize`, meaning: `整理；组织`, level: 'L3',
    l2: { en: `Organize the toys!`, zh: `整理玩具！` },
    l3: [
      { en: `Organize the books.`, zh: `整理书。` },
      { en: `Organize the blocks.`, zh: `整理积木。` },
      { en: `Organize the shelf.`, zh: `整理架子上的东西。` }
    ],
    l4: [
      { en: `Organize the toys by type.`, zh: `按种类整理玩具。` },
      { en: `Organize the books and put them on the shelf.`, zh: `整理好书，放到书架上。` },
      { en: `Organize the blocks by color before you build a tower.`, zh: `搭塔之前先按颜色把积木整理好。` }
    ]
  },
  {
    id: '89', scene: SCENES.CLEAN_ORGANIZE, word: `pick up`, meaning: `捡起；拿起`, level: 'L1',
    l2: { en: `Pick up the toy!`, zh: `把玩具捡起来！` },
    l3: [
      { en: `Pick up the blocks.`, zh: `把积木捡起来。` },
      { en: `Pick up the book.`, zh: `把书捡起来。` },
      { en: `Pick up the ball.`, zh: `把球捡起来。` }
    ],
    l4: [
      { en: `Pick up the toys from the floor.`, zh: `把地上的玩具捡起来。` },
      { en: `Pick up three blocks and put them in the box.`, zh: `捡起三块积木，放进盒子里。` },
      { en: `Pick up the book after you finish reading.`, zh: `读完书后把书捡起来。` }
    ]
  },
  {
    id: '90', scene: SCENES.CLEAN_ORGANIZE, word: `put away`, meaning: `收起来；放回原处`, level: 'L2',
    l2: { en: `Put away your shoes!`, zh: `把鞋子收起来！` },
    l3: [
      { en: `Put away the books.`, zh: `把书收起来。` },
      { en: `Put away the blocks.`, zh: `把积木收起来。` },
      { en: `Put the cup away.`, zh: `把杯子收起来。` }
    ],
    l4: [
      { en: `Put away your toys after you finish playing.`, zh: `玩完玩具后把玩具收好。` },
      { en: `Put the blocks away in the box.`, zh: `把积木收进盒子里。` },
      { en: `Put the books away before you go to bed.`, zh: `睡觉前把书收起来。` }
    ]
  },
  {
    id: '91', scene: SCENES.CLEAN_ORGANIZE, word: `wash`, meaning: `洗`, level: 'L1',
    l2: { en: `Wash the dishes!`, zh: `洗碗！` },
    l3: [
      { en: `Wash the cup.`, zh: `洗杯子。` },
      { en: `Wash the clothes.`, zh: `洗衣服。` },
      { en: `Wash the toy.`, zh: `洗一下玩具。` }
    ],
    l4: [
      { en: `Wash the dishes after lunch.`, zh: `午饭后洗一下碗。` },
      { en: `Wash the cup, then put it on the drying rack.`, zh: `洗好杯子，然后把它放到沥水架上。` },
      { en: `Wash the cup after you drink the milk.`, zh: `喝完牛奶后洗一下杯子。` }
    ]
  },
  {
    id: '92', scene: SCENES.CLEAN_ORGANIZE, word: `scrub`, meaning: `刷洗；用力擦洗`, level: 'L3',
    l2: { en: `Scrub the table!`, zh: `刷洗桌子！` },
    l3: [
      { en: `Scrub the cup.`, zh: `用力刷杯子。` },
      { en: `Scrub the sink.`, zh: `刷洗水池。` },
      { en: `Scrub with a sponge.`, zh: `用海绵刷洗。` }
    ],
    l4: [
      { en: `Scrub the table until it is clean.`, zh: `把桌子刷干净为止。` },
      { en: `Scrub the dirty spot with a sponge.`, zh: `用海绵刷掉脏的地方。` },
      { en: `Scrub the cup before you rinse it.`, zh: `冲洗杯子前先刷一刷。` }
    ]
  },
  {
    id: '93', scene: SCENES.CLEAN_ORGANIZE, word: `sort`, meaning: `分类`, level: 'L2',
    l2: { en: `Sort the blocks!`, zh: `把积木分类！` },
    l3: [
      { en: `Sort the toys.`, zh: `把玩具分类。` },
      { en: `Sort the blocks by shape.`, zh: `按形状给积木分类。` },
      { en: `Sort the books.`, zh: `把书分类。` }
    ],
    l4: [
      { en: `Sort the blocks by color, then put in a box.`, zh: `按颜色给积木分类，然后放到盒子里。` },
      { en: `Sort the toys into two groups.`, zh: `把玩具分成两堆。` },
      { en: `Sort the books and put them on the shelf.`, zh: `把书分好类，放到书架上。` }
    ]
  },
  {
    id: '94', scene: SCENES.CLEAN_ORGANIZE, word: `stack`, meaning: `堆叠`, level: 'L2',
    l2: { en: `Stack the books!`, zh: `把书叠放好！` },
    l3: [
      { en: `Stack the dishes.`, zh: `把盘子叠起来。` },
      { en: `Stack the small boxes.`, zh: `把小纸盒叠起来。` },
      { en: `Stack the books neatly.`, zh: `把书叠整齐。` }
    ],
    l4: [
      { en: `Stack the books neatly on the shelf after you finish reading.`, zh: `读完书后，把书叠放在书架上。` },
      { en: `Stack the clean dishes, then put them in the cabinet.`, zh: `把洗干净的餐具叠放好，然后放进橱柜里。` },
      { en: `Stack the small boxes on top of the big box.`, zh: `把小盒子叠放在大盒子上面。` }
    ]
  },
  {
    id: '95', scene: SCENES.CLEAN_ORGANIZE, word: `spray`, meaning: `喷洒`, level: 'L2',
    l2: { en: `Spray some water!`, zh: `喷点水！` },
    l3: [
      { en: `Spray the flower.`, zh: `给花喷水。` },
      { en: `Spray the plant.`, zh: `给植物喷水。` },
      { en: `Spray the window.`, zh: `给窗户喷水。` }
    ],
    l4: [
      { en: `Spray some water on the plant.`, zh: `给植物喷点水。` },
      { en: `Spray some water on the cloth.`, zh: `把水喷在抹布上。` },
      { en: `Spray some water on the window before you wipe it.`, zh: `擦窗户前先往窗户上喷点水。` }
    ]
  },
  {
    id: '96', scene: SCENES.CLEAN_ORGANIZE, word: `sweep`, meaning: `扫`, level: 'L2',
    l2: { en: `Sweep the floor!`, zh: `扫地！` },
    l3: [
      { en: `Sweep the fallen leaves.`, zh: `扫掉落叶。` },
      { en: `Sweep the crumbs.`, zh: `扫掉碎屑。` },
      { en: `Sweep with the broom.`, zh: `用扫把扫地。` }
    ],
    l4: [
      { en: `Sweep the crumbs into the dustpan.`, zh: `把碎屑扫进簸箕里。` },
      { en: `Sweep the floor after we finish eating.`, zh: `吃完饭后扫地。` },
      { en: `Pick up the toys, then sweep the floor.`, zh: `先把玩具捡起来，再扫地。` }
    ]
  },
  {
    id: '97', scene: SCENES.CLEAN_ORGANIZE, word: `throw away`, meaning: `扔掉`, level: 'L2',
    l2: { en: `Throw away the trash!`, zh: `把垃圾扔掉！` },
    l3: [
      { en: `Throw away the paper.`, zh: `把纸扔掉。` },
      { en: `Throw away the wrapper.`, zh: `把包装纸扔掉。` },
      { en: `Throw it away.`, zh: `把它扔掉。` }
    ],
    l4: [
      { en: `Throw away the trash after eating.`, zh: `吃完后把垃圾扔掉。` },
      { en: `Throw away the paper when you finish drawing.`, zh: `画完画就把纸扔掉。` },
      { en: `Throw the empty box away before you clean the table.`, zh: `擦桌子前把空盒子扔掉。` }
    ]
  },
  {
    id: '98', scene: SCENES.CLEAN_ORGANIZE, word: `vacuum`, meaning: `用吸尘器清洁`, level: 'L3',
    l2: { en: `Vacuum the floor!`, zh: `用吸尘器吸一下地！` },
    l3: [
      { en: `Vacuum the room.`, zh: `用吸尘器吸一下房间。` },
      { en: `Vacuum the carpet.`, zh: `用吸尘器吸一下地毯。` },
      { en: `Vacuum under the table.`, zh: `用吸尘器吸一下桌子下面。` }
    ],
    l4: [
      { en: `Vacuum the floor after playing.`, zh: `玩完后用吸尘器吸一下地板。` },
      { en: `Vacuum under the sofa carefully.`, zh: `小心地用吸尘器吸一下沙发下面。` },
      { en: `Vacuum the carpet after you put the toys back.`, zh: `收好玩具后用吸尘器吸一下地毯。` }
    ]
  },
  {
    id: '99', scene: SCENES.CLEAN_ORGANIZE, word: `water`, meaning: `浇水`, level: 'L1',
    l2: { en: `Water the plants!`, zh: `给植物浇水！` },
    l3: [
      { en: `Water the flowers.`, zh: `给花浇水。` },
      { en: `Water the garden.`, zh: `给花园浇水。` },
      { en: `Water the plant slowly.`, zh: `慢慢给植物浇水。` }
    ],
    l4: [
      { en: `Water the plants in the morning.`, zh: `早上给植物浇水。` },
      { en: `Water the flowers with the blue cup.`, zh: `用蓝色杯子给花浇水。` },
      { en: `Water the small plant when the soil is dry.`, zh: `土干了就给小植物浇水。` }
    ]
  },
  {
    id: '100', scene: SCENES.CLEAN_ORGANIZE, word: `rinse`, meaning: `冲洗`, level: 'L2',
    l2: { en: `Rinse the cup.`, zh: `冲洗一下杯子！` },
    l3: [
      { en: `Rinse the bowl.`, zh: `冲洗一下碗。` },
      { en: `Rinse the spoon.`, zh: `冲洗一下勺子。` },
      { en: `Rinse the cup with clean water.`, zh: `用清水冲洗杯子。` }
    ],
    l4: [
      { en: `Rinse the cup after you wash it.`, zh: `洗完杯子后再冲一遍。` },
      { en: `Rinse the dishes and put them on the rack.`, zh: `冲洗碗碟，然后放到沥水架上。` },
      { en: `Rinse the bowl until all the soap is gone.`, zh: `把碗冲洗干净，直到没有肥皂泡。` }
    ]
  }
];
