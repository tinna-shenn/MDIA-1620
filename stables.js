// Welcome!
//
//                                                  #    #
//                                             %%% ##   ##
//                                          %%%%% ###%🎀###
//                                         %%%%% ### %%% #
//                                       %%%%%% ### %%% ###
//                                        %%%% ## %% #######
//                                       %%%%% # %% #@#####
//                                     %%%%%% # % #########
//                                    %%%%% ##### #########
//                          ###        %% ####### #########
//                 %%% ############    ########### ########
//              %%%% ############################### #######
//            %%%%% ################################## ######
//          %%%%%% #################################### #C###
//         %%%🌸%% #####################################  ###
//         %%%%% #######################################
//        %%%%%% ############### BEANS ##################
//     % %%%%%%% ############### BEANS ##################
//      %%%%%%%%% ############## BEANS ##################
//     %%%%%%%%%% ########################################
//  %%% %%%%%%%%   ###### ################################
//    %%%%%%%%      ###### #################### ##########
// % %%%🌸%%%%        ####### ########### ###### ##########
//  %%%%%%%%%         #######  ########### ###### ########
// %%%%%%%%%%          ##### ###  ######### ####### ######
//  %%%%%%%%%%          #### ##               ####### ####
//  %🌸%%%%%%%%%           ## #                  ##### ###
//   %%  %% % %%         # ##                      ## ###
//     %   %    %        # ###                      # ###
//                        # ###                     ## ###
//                        # ###                     ## ###
//                        # ####                   #### ##
//                       ### ###                  ##### ###
//                      ####  ###                 ####   ##
//                     #####   ###                 ##    ##
//                    #####    ####                      ###
//                     ##        ###                     ###
//                                ####                     ##
//                                 ####                    ###
//                                                         ####
//                                                          ##
//
// ----------------------- First day (Assignment 2) -------------------------//

// Horse Objects
let jonathan = {
    name: "Jonathan",
    nickname: "Jon",
    favouriteTreat: "Blueberries",
    age: 7,
    monthlyRent: 500,
    isHorseInside: true,
    homeTown: "Coquitlam",
    topSpeed: 88 // km/h
}

let applePie = {
    name: "Apple Pie",
    nickname: "Apple",
    favouriteTreat: "Grass",
    age: 8,
    monthlyRent: 800,
    isHorseInside: false,
    homeTown: "Burnaby",
    topSpeed: 70 // km/h
}

let tinyTuna = {
    name: "Tiny Tuna",
    nickname: "Tuna",
    favouriteTreat: "Fish",
    age: 3,
    monthlyRent: 1000,
    isHorseInside: false,
    homeTown: "Surrey",
    topSpeed: 76 // km/h
}


// Horse Array
let horses = [jonathan, applePie, tinyTuna]


// New Horse Stabled
let timmyTurner = {
    name: "Timmy Turner",
    nickname: "Tim Turn",
    favouriteTreat: "Scrambled cake, three strips of chocolate and a big bowl of frosting",
    age: 5,
    monthlyRent: 1500,
    isHorseInside: true,
    homeTown: "California",
    topSpeed: 60 , // km/h
}
horses.push(timmyTurner);

// Check if horses are hungry or not
horses[0].isHungry = false;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true;

// Stall Variables
let totalStalls = 8;

function logStallsAvailable(totalStalls, numberOfStalls) {
    let stallsAvailableCount = totalStalls - numberOfStalls;
    console.log(`There are ${stallsAvailableCount} stalls available out of ${totalStalls} total stalls.`)
}
logStallsAvailable(totalStalls, horses.length);


// Rent Owed
function logOwedRent(rent, lateFee) {
    console.log(`This horse owes ${rent + lateFee} total rent due to late payment`)
}
logOwedRent(450, 50) // This horse owes $500 for late rent

// Nicknames of the Horse
function getNickname(horse) {
    return horse.nickname;
}

let horseNickname = getNickname(horses[0]);
console.log(horseNickname);

//------------------------- Day to day operations (Project) -------------------------//
let treat = "Grass";

// Find out if horse likes particular treat.
for (const horse of horses) {
    if (horse.favouriteTreat===treat){
    console.log(`${horse.name} likes this treat! 🥰`);
    break;
    } else {
        console.log(`${horse.name} does not like this treat. ☹️`);
    }
}

// Horse Hometowns
function logHorseHomeTown(horse) {
        if (horse.homeTown === "California") {
            console.log(`${horse.name} is a long way from home in ${horse.homeTown}.`);
        } else {
            console.log(`${horse.name} is from ${horse.homeTown}.`)
        }
    }

for (const horse of horses) {
logHorseHomeTown(horse);
}

// Feeding Horses!
function logFeedHorses(horsesToFeed) {
    for (const horse of horsesToFeed) {
        if (!horse.isHorseInside) {
            horse.isHorseInside = true;
            console.log(`${horse.name} has been called back inside for a treat!`);
        } 
        horse.isHungry = false;
        console.log(`${horse.name} has been fed a treat 😎.`)
    }
}
logFeedHorses(horses)

// Moving Horses Outside/Bedtime
function logMoveHorses(horsesToMove, isDark) {
    for (const horse of horsesToMove) {
        if (isDark && !horse.isHorseInside) {
            horse.isHorseInside = true;
            console.log(`${horse.name} has been called back inside for sleepy time 💤`);
        } else if (!isDark && horse.isHorseInside) {
            horse.isHorseInside = false;
            console.log(`${horse.name} went outside to spend some time in the sun ☀️!`)
        }
    }
}
logMoveHorses([jonathan], false);
logMoveHorses([timmyTurner], false);
logMoveHorses(horses);
logMoveHorses(horses, false);

