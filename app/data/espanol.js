var ESPANOL = {
	menuChoices: [
		"Viaje",
		"Haz tu parte",
		"Calidad del AireTexas",
		"Asociación",
		"Recursos",
		"Noticias",
		"Acerca de"
	],
	searchWord: "BUSCAR",
	shareWord: "Compartir",
	faqWord: "PMF",
	contactWord: "Contacto",
	keepItMoving: "Sigue moviendote",
	orText: "o",
	scene1: {
		aria_text: "",
		subtitle: "Mejore la calidad del aire y ahorre dinero cuando maneja.",
		useArrows: "Use las flechas para seleccionar su vehículo",
		hitTheRoad: "¡Vamonos en camino!",
	},
	scene2: {
		aria_text: "",
		step_text: "Paso 1/3",
		progress_text: "¡Lindo paseo! Pero tu tanque está vacío...",
		button_text: "Vamos a llenarlo",
		truck: {
			question_text: "Hey jefe! Vamos a necesitar algo de gas antes de nuestro viaje. ¿Quieres parar ahora o más tarde?",
			option_good: "Later",
			option_bad: "Now",
			bad_answer: "Whoa. Gas is evaporating in the heat. That can't be good.",
			good_answer: "It's nice and cool in the evening, so the gas isn't evaporating."
		},
		sport: {
			question_text: "Before we drive, we gotta fill up. What time do you wanna stop by the gas station?",
			option_good: "Lunch Time",
			option_bad: "Evening",
			good_answer: "What's that smell? Fuel evaporates in the heat and gets ozone into the air. Gross.",
			bad_answer: "It's nice and cool in the evening, so the gas isn't evaporating. Good call!"
		},
		van: {
			question_text: "Axl and I think we should stop before lunch for gas to prep for the trip, or else after band practice. What do you think?",
			option_good: "Before Lunch",
			option_bad: "After Band Practice",
			good_answer: "Whoa yuck dude. Gas is evaporating in the heat. Not cool, man. Not cool.",
			bad_answer: "Aww yeah! Its cool in the evening, so the gas isn't evaporating."
		},
		sedan: {
			question_text: "Hey honey! We should probably fill up before our trip. When do you have time?",
			option_good: "Around 1",
			option_bad: "Tonight",
			good_answer: "Oh drat! That gas smell is awful. Is it evaporating in the heat? That can't be good.",
			bad_answer: "Yay! It's nice and cool in the evening, so the gas isn't evaporating. Kisses!"
		}
	},
	scene3: {
		aria_text: "",
		step_text: "Step 2/3",
		progress_text: "Sweet! Time to run some errands.",
		button_text: "You need snacks",
		truck: {
			question_text: "I gotta stop by the shop to get a part, and we should get some snacks for the trip. You wanna go together, or should we split up?",
			option_good: "Together",
			option_bad: "Split Up",
			good_answer: "Let's get to it! Combining errands saves time and money.",
			bad_answer: "Dang, that used more gas. Several short trips, each beginning with a cold start, can use twice as much gas as one longer trip the same distance."
		},
		sport: {
			question_text: "I gotta stop by campus, and we should also get some snacks for the trip. You wanna go together, or should we split up?",
			option_good: "Together",
			option_bad: "Split Up",
			good_answer: "Up top! Combining errands saves time and money.",
			bad_answer: "That used more gas. Several short trips, each beginning with a cold start, can use twice as much gas as one longer trip the same distance."
		},
		van: {
			question_text: "I need to go by the recording studio to pick up my guitar, and we should also stop by the grocery store for snacks for the trip. You wanna go together, or should we split up?",
			option_good: "Together",
			option_bad: "Split Up",
			good_answer: "Right on! Let's roll together. Combining errands saves time and money.",
			bad_answer: "Oh man,  that used more gas! Several short trips, each beginning with a cold start, can use twice as much gas as one longer trip the same distance."
		},
		sedan: {
			question_text: "I need to pick up kids, and we should also stop by the grocery store for snacks for the trip. You wanna go together, or should we split up?",
			option_good: "Together",
			option_bad: "Split Up",
			good_answer: "The family that runs errands together stays together! A great way to save time and money, not to mention keep the air clean for the next generation.",
			bad_answer: "Oh my, that used more gas. Several short trips, each beginning with a cold start, can use twice as much gas as one longer trip the same distance."
		}
	},
	scene4: {
		aria_text: "",
		step_text: "Step 3/3",
		progress_text: "Almost Ready.  Let's Pack Up!",
		button_text: "Trunk's Already Full",
		truck: {
			question_text: "Let's pack up the truck for our big trip! We have a lot of stuff to haul. Should we take out some of this stuff we won't need?",
			option_good: "Everything",
			option_bad: "No",
			good_answer: " Heavy items would weigh us down and reduce fuel economy. Time to hit the road!",
			bad_answer: "That's the ticket! Heavy items can really weigh you down, pal. Time to hit the road!"
		},
		sport: {
			question_text: "Let's pack up the car for the big trip. We have a lot of stuff. Should we take out anything before we leave?",
			option_good: "Everything",
			option_bad: "No",
			good_answer: "Baller! Heavy items would weigh us down and cost us money. Time to hit the road!",
			bad_answer: "Nice Heavy items can majorly weigh us down. That's kind of a drag. Time to hit the road!"
		},
		van: {
			question_text: "Let's pack up the van for our big tour! We have amps and equipment to bring, but extra stuff too. Should we take some of this stuff out?",
			option_good: "Everything",
			option_bad: "No",
			good_answer: "Heavy items would weigh us down and cost us money. That's kind of a drag. Time to hit the road!",
			bad_answer: "Much better! Heavy items can really weigh you down. Time to hit the road!"
		},
		sedan: {
			question_text: "Let's pack up the car for the big family trip. We have a lot of stuff. Should we take out anything before we leave?",
			option_good: "Everything",
			option_bad: "No",
			good_answer: "The family that runs errands together stays together! A great way to save time and money, not to mention keep the air clean for the next generation.",
			bad_answer: "Oh my, that used more gas. Several short trips, each beginning with a cold start, can use twice as much gas as one longer trip the same distance."
		}
	},
	scene5: {
		aria_text: "",
		step_text: "Corpus Map",
		progress_text: "Congratulations! You're all ready to hit the road! First stop on your trip is:"
	},
	scene6: {
		aria_text: "",
		step_text: "Corpus",
		progress_text: "Love Your Tires!",
		button_text: "Grab Some Air",
		truck: {
			question_text: "Time to ditch these boots and get my toes in the sand for a quick break! Hmm, the tire pressure indicator just came on! Do I need to stop and check the pressure?",
			option_good: "Check",
			option_bad: "Drive",
			good_answer: "Great! Looks like we needed a little more air. Now that they are properly inflated, we'll be saving money and reducing emissions.",
			bad_answer: "Underinflation is dangerous. It can cause tire failure and add drag and cost us money. We need to be sure to check the tire pressure once a month."
		},
		sport: {
			question_text: "Vacation starts now! Hmm, the tire pressure indicator just came on! Do I need to stop and check the pressure?",
			option_good: "Check",
			option_bad: "Drive",
			good_answer: "Great! Looks like we needed a little more air. Now that they are properly inflated, we'll be saving money and reducing emissions. Sweet!",
			bad_answer: "I don't know dude, underinflation is dangerous. It can cause tire failure and add drag and cost us money. We need to be sure to check the tire pressure once a month."
		},
		van: {
			question_text: "Tour mode starts now! Dang, the tire pressure indicator just came on! Do I need to stop and check the pressure?",
			option_good: "Check",
			option_bad: "Drive",
			good_answer: "Perf! Looks like we needed a little more air. Now that they are properly inflated, we'll be saving money and reducing emissions. Rock'n'Roll!",
			bad_answer: "Aw man, underinflation is dangerous. It can cause tire failure and add drag and cost us money. We need to be sure to check the tire pressure once a month."
		},
		sedan: {
			question_text: "Off to the beach! Oh wait, the tire pressure indicator just came on!  Do I need to stop and check the pressure?",
			option_good: "Check",
			option_bad: "Drive",
			good_answer: "Yay! Looks like we needed a little more air. Now that they are properly inflated, we'll be saving money and reducing emissions. Woot!",
			bad_answer: "Uh-oh! Underinflation is dangerous. It can cause tire failure and add drag and cost us money. We need to be sure to check the tire pressure once a month."
		}
	},
	scene7: {
		aria_text: "",
		step_text: "Houston Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene8: {
		aria_text: "",
		step_text: "Houston",
		progress_text: "Be The Oil Change",
		button_text: "Check that Oil",
		truck: {
			question_text: "According to the ol' odometer, it's about time to change the oil. Which one do we choose?",
			option_good: "Conventional Oil",
			option_bad: "Energy-Conserving Oil",
			good_answer: "Good. We got our oil changed on schedule and did our part for the environment.",
			bad_answer: "Well, this is alright but an \"energy-conserving\" option would have been better for the environment."
		},
		sport: {
			question_text: "According to the ol' odometer, it's about time to change the oil. Which one do we choose?",
			option_good: "Conventional Oil",
			option_bad: "Energy-Conserving Oil",
			good_answer: "Nice call! Oil changed on schedule and we're doing our part for the environment.",
			bad_answer: "This works but an \"energy-conserving\" option would have been a better call for the environment."
		},
		van: {
			question_text: "According to the odometer, it's about time to change that oil. Which one do we choose?",
			option_good: "Conventional Oil",
			option_bad: "Energy-Conserving Oil",
			good_answer: "High-fives all around! Oil changed on schedule and we're doing our part for the environment.",
			bad_answer: "Well, this is alright alright alright but an \"energy-conserving\" option would have been a better call for the environment."
		},
		sedan: {
			question_text: "Honey! According to the ol' odometer, it's about time to change that oil. Which one do we choose?",
			option_good: "Conventional Oil",
			option_bad: "Energy-Conserving Oil",
			good_answer: "Good job! We got our oil changed on schedule and we're doing our part for the environment. And I love teaching the kids how we take care of the environment.",
			bad_answer: "This is fine but an \"energy-conserving\" option would have been better for the environment, dear."
		}
	},
	scene9: {
		aria_text: "",
		step_text: "Tyler Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene10: {
		aria_text: "",
		step_text: "Tyler",
		progress_text: "Sharing is Caring",
		button_text: "Share?",
		truck: {
			question_text: "Let's stop and smell the roses for a little bit with our friends in the Rose Capital of the World! Joe lives up the road and wants to go horseback riding. Should we pick him up and carpool or meet at the ranch?",
			option_good: "Carpool",
			option_bad: "Meet There",
			good_answer: "That's a great way to spend time with friends and save on gas costs and maintenance.",
			bad_answer: "Lonely drivers put more cars on the road and emissions into the air."
		},
		sport: {
			question_text: "Let's stop and smell the roses with friends in the Rose Capital of the World! My buddy lives up the road and wants to go hiking. Should we pick him up and carpool or meet there?",
			option_good: "Carpool",
			option_bad: "Meet There",
			good_answer: "I love vanpooling with you guys! Cutting fuel costs and hanging out with friends. Win-Win.",
			bad_answer: "Lonely drivers put more cars on the road and emissions into the air, man."
		},
		van: {
			question_text: "Let's stop and smell the roses with our friends in the Rose Capital of the World! My buddy lives up the road and wants to check out the Rose Garden. Should we pick him up and carpool or meet there?",
			option_good: "Carpool",
			option_bad: "Meet There",
			good_answer: "High-fives all around! Oil changed on schedule and we're doing our part for the environment.",
			bad_answer: "Well, this is alright alright alright but an \"energy-conserving\" option would have been a better call for the environment."			
		},
		sedan: {
			question_text: "Let's stop and smell the roses and take pictures in the Rose Capital of the World! We have a family friend who lives close by and want to go horseback riding. Should we offer to carpool or meet at the ranch?",
			option_good: "Carpool",
			option_bad: "Meet There",
			good_answer: "What a great way to spend time with friends and save on gas costs and maintenance!",
			bad_answer: "Lonely drivers put more cars on the road and emissions into the air."
		}
	},
	scene11: {
		aria_text: "",
		step_text: "DFW Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene12: {
		aria_text: "",
		step_text: "DFW",
		progress_text: "Ride the Bus",
		button_text: "Ride the Bus?",
		truck: {
			question_text: "Country living in Fort Worth! Time to head down to the stockyards in Cowtown and get some work done. Afterwards we should go grab some dinner, when we do, do you think we should give it a try or keep driving our own car?",
			option_good: "Public Transit",
			option_bad: "Car",
			good_answer: "Let's try the bus! What better way to see the city. ",
			bad_answer: "Well, now we're stuck in traffic and increasing emissions. We could have been relaxing on a bus or train instead!"
		},
		sport: {
			question_text: "Here we are in the Big D! Dallas has a great public transit system. Do you think we should give it a try or keep driving our own car?",
			option_good: "Public Transit",
			option_bad: "Car",
			good_answer: "Let's DART! Dallas Area Rapid Transit can actually be really fun and it's good for the air.",
			bad_answer: "Well, now we're stuck in traffic and we're increasing emissions. We could have been relaxing on a bus or train instead."
		},
		van: {
			question_text: "Dallas baby! Dallas has a great public transit system. Do you think we should give it a try and check out the city or keep driving the van around?",
			option_good: "Public Transit",
			option_bad: "Car",
			good_answer: "Let's DART! Been a while since I rode the rails. Dallas Area Rapid Transit is awesome and good for the air.",
			bad_answer: "What a drag - now we're stuck in traffic and increasing emissions. We could have been chilling on a bus or train instead and I'm tired of driving!"			
		},
		sedan: {
			question_text: "Here we are in DFW! Dallas has a great public transit system. Do you think we should give it a try or keep driving our own car?",
			option_good: "Public Transit",
			option_bad: "Car",
			good_answer: "Let's DART! Dallas Area Rapid Transit is awesome and good for the air. And the kids will think it's fun! ",
			bad_answer: "Now we're stuck in traffic and increasing emissions. We could have been relaxing on a bus or train instead!"
		}
	},
	scene13: {
		aria_text: "",
		step_text: "Cadlilac Ranch Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene14: {
		aria_text: "",
		step_text: "Cadillac Ranch",
		progress_text: "Get Your Vehicle Fixed",
		button_text: "Get Your Vehicle Fixed?",
		truck: {
			question_text: "Dang. The \"Check Engine\" light came on near Cadillac Ranch. Let's stop at the mechanic. It is important to fix serious problems.",
			option_good: "OK",
			option_bad: "",
			good_answer: "Yep. Faulty oxygen sensor. Fixin' that when it is broken it can improve gas mileage up to 40%.",
			bad_answer: ""
		},
		sport: {
			question_text: "The \"Check Engine\" light came on near Cadillac Ranch. Let's stop at the mechanic. It is important to fix serious problems.",
			option_good: "OK",
			option_bad: "",
			good_answer: "Looks like it was the oxygen sensor. The mechanic said fixing that when it is broken it can improve gas mileage up to 40%. You know what that means, more roadtrip snacks! ",
			bad_answer: ""
		},
		van: {
			question_text: "Whoa. The \"Check Engine\" light came on near Cadillac Ranch. Let's stop at the mechanic. It is important to fix serious problems.",
			option_good: "OK",
			option_bad: "",
			good_answer: "Mechanic said it was the oxygen sensor, man. Fixing that when it is broken it can improve gas mileage up to 40%.",
			bad_answer: ""			
		},
		sedan: {
			question_text: "Oh dear! The \"Check Engine\" light came on near Cadillac Ranch. Let's stop at the mechanic. It is important to fix serious problems.",
			option_good: "OK",
			option_bad: "",
			good_answer: "The oxygen sensor was the problem. The mechanic said fixing that when it is broken it can improve gas mileage up to 40%.",
			bad_answer: ""
		}
	},
	scene15: {
		aria_text: "",
		step_text: "El Paso Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene16: {
		aria_text: "",
		step_text: "El Paso",
		progress_text: "Taco Stop",
		button_text: "Taco Stop?",
		truck: {
			question_text: "I got a hankerin' for some old-fashioned El Paso tacos! That drive-thru line looks a tad long, should we drive-thru or go inside?",
			option_good: "Go Inside",
			option_bad: "Drive-Thru",
			good_answer: "Heck yes, got our tacos and avoided idling in the long drive-thru line!",
			bad_answer: "Well shoot, this is taking longer than I thought. It would have been faster and burned less gas if we went inside."
		},
		sport: {
			question_text: "I've worked up an appetite with all this driving! We gotta get some of those yummy El Paso tacos. The drive-thru line looks kind of long, should we drive-thru or go inside?",
			option_good: "Go Inside",
			option_bad: "Drive-Thru",
			good_answer: "Nice, we got our tacos faster and avoided idling in the long drive-thru line.",
			bad_answer: "Ugh, this is taking longer than I thought. It would have been faster and burned less gas if we went inside."
		},
		van: {
			question_text: "Tacos! Tacos! Tacos! Oooh, that spot looks hoppin' but the drive-thru line is pretty long. Should we drive-thru or go inside?",
			option_good: "Go Inside",
			option_bad: "Drive-Thru",
			good_answer: "Sweeeeeeet. We got our tacos in no time and avoided idling in the long drive-thru line! Now I'm fueled up to write our next hit song! ",
			bad_answer: "Major bummer being stuck in this long drive-thru line. Now we're wasting gas and money. "			
		},
		sedan: {
			question_text: "Who's hungry?? I am! Let's get some delicious El Paso tacos. The drive-thru line looks a bit long, should we drive-thru or go inside?",
			option_good: "Go Inside",
			option_bad: "Drive-Thru",
			good_answer: "Yay, we got our tacos faster and avoided idling in the long drive-thru line!",
			bad_answer: "Be patient, kids! The drive-thru is moving slowly. We should have gone inside instead of letting our car idle in line."
		}
	},
	scene17: {
		aria_text: "",
		step_text: "Big Bend Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene18: {
		aria_text: "",
		step_text: "Big Bend",
		progress_text: "Bike or Walk",
		button_text: "Bike or Walk?",
		truck: {
			question_text: "Well, I haven't been to ol' Big Bend in a while! Our legs could probably use a stretch. How do you think we should see the sights today?",
			option_good: "Walk/Bike",
			option_bad: "Car",
			good_answer: "Let's get movin'! Plus biking and walking reduce emissions by 100%.",
			bad_answer: "Oh gosh! My legs are cramping up from being in the car too long. I knew we should have taken a walk around instead."
		},
		sport: {
			question_text: "We made it to beautiful Big Bend! Should we drive through the park or should we walk and rent bikes?",
			option_good: "Walk/Bike",
			option_bad: "Car",
			good_answer: "Bikes are rad! And we can afford it since we had another gig. Let's get our blood pumping and blow off some steam too. Plus biking and walking reduce emissions by 100%.",
			bad_answer: "Dude. I'm so sick of being in this smelly van. That exhaust can't be good for the ozone either."
		},
		van: {
			question_text: "Guys and gals, let's check out the sights. Should we just get around by van or we could cruise around on some rad bikes? You down?",
			option_good: "Walk/Bike",
			option_bad: "Car",
			good_answer: "Bikes are rad! And we can afford it since we had another gig. Let's get our blood pumping and blow off some steam too. Plus biking and walking reduce emissions by 100%.",
			bad_answer: "Dude. I'm so sick of being in this smelly van. That exhaust can't be good for the ozone either."			
		},
		sedan: {
			question_text: "Alright gang! We made it to Big Bend! So much to do! How would you kids feel about renting some bikes or would you rather keep riding in the car?",
			option_good: "Walk/Bike",
			option_bad: "Car",
			good_answer: "Let's have some fun being active and exploring! Plus biking and walking reduce emissions by 100%.",
			bad_answer: "Ack! Now the kids are stir-crazy! We all really should have gotten some exercise today."
		}
	},
	scene19: {
		aria_text: "",
		step_text: "Austin Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene20: {
		aria_text: "",
		step_text: "Austin",
		progress_text: "Keep Austin Chill",
		button_text: "Keep Austin Chill?",
		truck: {
			question_text: "Ah, that beautiful Texas Hill Country! Can't wait to check out the Formula 1's Circuit of the Americas raceway. But when we're off the track, let's drive nice and easy and leave the racing to the professionals. What a pretty city to cruise around nice and easy-like. ",
			option_good: "Sounds Good!",
			option_bad: "",
			good_answer: "Driving is not a race. Aggressive driving like accelerating quickly and braking hard increases emissions and lowers gas mileage.",
			bad_answer: ""
		},
		sport: {
			question_text: "Looks like Austin is still keeping it weird! Can't wait to check out the campus and nightlife! Let's see all the sights we can - remember it's not a race though. Let's remember to drive nice and easy.",
			option_good: "Sounds Good!",
			option_bad: "",
			good_answer: "Less fast, less furious. Driving is not a race. Aggressive driving like accelerating quickly and braking hard increases emissions and lowers gas mileage.",
			bad_answer: ""
		},
		van: {
			question_text: "Rock on, Live Music Capitol of the World! We have another gig! I'm so amped for tonight and can't wait to get there!  But let's slow our roll. We'll get there in plenty of time and need to save gas and money!",
			option_good: "Sounds Good!",
			option_bad: "",
			good_answer: "Aggressive driving like accelerating quickly and braking hard increases emissions and lowers gas mileage. We're gonna have a great show.",
			bad_answer: ""			
		},
		sedan: {
			question_text: "We made it to the state capitol! So much to see in so little time. Safety first! We keep our driving nice and easy to make it safer for our family and friends while also saving gas and money.",
			option_good: "Sounds Good!",
			option_bad: "",
			good_answer: "Thanks for driving safely. Aggressive driving like accelerating quickly and braking hard increases emissions and lowers gas mileage.",
			bad_answer: ""
		}
	},
	scene21: {
		aria_text: "",
		step_text: "San Antonio Map",
		progress_text: "Next stop on your road trip is:"
	},
	scene22: {
		aria_text: "",
		step_text: "San Antonio",
		progress_text: "O-Zone You Didn't",
		button_text: "O-Zone You Didn't?",
		truck: {
			question_text: "Well shoot, the electronic sign says today is an Ozone Action Day here in San Antonio.  Should we keep driving or kick back our boots for the day?",
			option_good: "Take a Break",
			option_bad: "Keep Driving",
			good_answer: "What a beautiful day to enjoy the Riverwalk and Alamo. And we didn't add any emissions to the air.",
			bad_answer: "Well that didn't save us much time anyway, it would have been better for the Ozone if we could have driven less today. "
		},
		sport: {
			question_text: "Uh-oh, the electronic sign says today is an Ozone Action Day here in San Antonio. Should we keep driving or take a break to relax for the day?",
			option_good: "Take a Break",
			option_bad: "Keep Driving",
			good_answer: "Let's have some fun enjoying the city. And we won't add any more ozone to the air.",
			bad_answer: "Well, it would have been better for the Ozone if we would have driven less today. Even small changes make a big difference. "
		},
		van: {
			question_text: "Dude, the electronic sign says today is an Ozone Action Day here in San Antonio. Should we keep driving or take a break to chill for the day?",
			option_good: "Take a Break",
			option_bad: "Keep Driving",
			good_answer: "Rock and roll! Remember the Alamo! Let's go chill out so we don't add to emissions today.",
			bad_answer: "Booooooo. Well, it would have been better for the Ozone if we could have driven less today.  "			
		},
		sedan: {
			question_text: "Oh no, the electronic sign says today is an Ozone Action Day here in San Antonio. Should we keep driving or take a break to let the kids stretch outside?",
			option_good: "Take a Break",
			option_bad: "Keep Driving",
			good_answer: "Yay! Fun family day at the Alamo and Riverwalk so we don't add to the emissions!",
			bad_answer: "Teaching moment, kids! It would have been better for the Ozone if we would have driven less today. "
		}
	},
	scene23: {
		last_sentence: "Make sure you play again",
		final_set: {
            			"final1" : {
                			"good" : "You fueled up in the evening.",
                			"bad" : "You fueled up in the heat of the day."
            			},
            			"final2" : {
                			"good" : "You combined errands, saving gas.",
                			"bad" : "You didn't combine your errands."
            			},
            			"final3" : {
                			"good" : "You removed excess weight.",
                			"bad" : "You didn't remove excess weight."
            			},
            			"final4" : {
                			"good" : "You properly inflated your tires.",
                			"bad" : "You drove with underinflated tires."
            			},
            			"final5" : {
                			"good" : "You used energy-conserving oil.",
                			"bad" : "You didn't use energy-conserving oil."
            			},
            			"final6" : {
                			"good" : "You carpooled.",
                			"bad" : "You drove alone and didn&#39t carpool."
            			},
            			"final7" : {
                			"good" : "You rode the bus.",
                			"bad" : "You took your car instead of the bus."
            			},
            			"final8" : {
                			"good" : "You fixed your faulty oxygen sensor.",
                			"bad" : "You fixed your faulty oxygen sensor."
            			},
            			"final9" : {
                			"good" : "You went inside to eat.",
                			"bad" : "You went through the drive-thru."
            			},
            			"final10" :{
                			"good" : "You went for a bike ride.",
                			"bad" : "You took your car instead of a bike."
            			},
            			"final11" :{
                			"good" : "You drove nice and easy.",
                			"bad" : "You drove nice and easy."
            			},
            			"final12" :{
                			"good" : "You didn't drive on Ozone Action Day. ",
                			"bad" : "You drove on an Ozone Action Day."
            			}
            		}
	}
};
