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

//------------------------- Seting up shop (Assignment 1) -------------------------//

// Horse Variables
let jonRent = 500
let jon = {
    name: "Jon",
    age: 7,
    favouriteSnack: "Blueberries",
    monthlyRent: jonRent,
    lateRent: jonRent + 500 * (0.2) // monthly rate with 20% late fee total
}

let appleRent = 800
let apple = {
    name: "Apple",
    age: 8,
    favouriteSnack: "Grass",
    monthlyRent: appleRent,
    lateRent: appleRent + 800 * (0.2) // monthly rate with 20% late fee total
}

let tunaRent = 1000
let tuna = {
    name: "Tuna",
    age: 3,
    favouriteSnack: "Fish",
    monthlyRent: tunaRent,
    lateRent: tunaRent + 1000 * (0.2) // monthly rate with 20% late fee total
}

// Stable Variables
let stableName = "The Terrific Stable!"
let visitorMessage = `Welcome to ${stableName}!`
let latePaymentMessage = `It would cost ${jon.monthlyRent} to board ${jon.name} for one month. If the payment is late it would cost ${jon.lateRent} to board ${jon.name} for one month.`

// Console Log
console.log(visitorMessage)
console.log(latePaymentMessage)

// MAKING CHANGES TO THIS FILE FOR THIS NEW BRANCH
// MAKING ANOTHER CHANGE TO THIS FILE!

// BLAH BLAH BLAH
if (true) {
    console.log("HI");
}
