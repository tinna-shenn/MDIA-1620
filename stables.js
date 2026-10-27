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
// This is a template for your assignments and final project. You'll be setting up a stable and making
// sure it runs smoothly.
//
// Please do not create a new file for each assignment!
// Feel free to keep the headings (e.g.: "Variables"), but please delete any boilerplate
// comments. E.g.: those seen on lines 58 - 68, for example. They are usually providing directions. 
// (Your own comments, where necessary, are acceptable.)
//
// NOTE: UNLESS SPECIFIED, VARIABLE NAMING IS UP TO YOU. THERE SHOULD BE NO HARD-CODED
// NUMBERS OR STRINGS WHERE VARIBALES WOULD BE PREFERRED.

//------------------------- First day (Assignment 2) -------------------------//

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
    topSpeed: 60 ,// km/h
}

horses.push(timmyTurner);


// Check if horses are hungry or not
horses[0].isHungry = false;
horses[1].isHungry = true;
horses[2].isHungry = false;
horses[3].isHungry = true;

// Stall Variables
let totalStalls = 8;

function logStallsAvailable(stalls) {
    let stallsAvailableCount = totalStalls - horses.length;
    console.log(`There are ${stallsAvailableCount} stalls available out of ${totalStalls} total stalls.`)
}
logStallsAvailable(totalStalls);


// Rent Owed
function logOwedRent(horse) {
    let lateFee = 100;
    let owedRent = horse.monthlyRent + lateFee;
    console.log(`${horse.name} owes ${owedRent} total (${horse.monthlyRent} rent + ${lateFee} late fee due to late payment)`)
}
logOwedRent(horses[0])

// Nicknames of the Horse
function getNickname(horse) {
    return horse.nickname;
}

let horseNickname = getNickname(horses[0]);
console.log(horseNickname);