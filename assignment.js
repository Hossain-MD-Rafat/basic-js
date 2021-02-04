function feetToMile(distanceInFeet){
    if(distanceInFeet<0){
        console.log("The distance can be negative");
    }
    else{
        distanceInMile = 0.000189394*distanceInFeet;
        distanceInMile = distanceInMile.toPrecision(4);
        return distanceInMile;
    }

}

function woodCalculator(chairs, tables, khats){
    if(chairs>=0 && tables>=0 && khats>=0){
        totalWoodRequired = (chairs*1) + (tables*3) + (khats*5);
        return totalWoodRequired;
    }
    else{
        console.log("The number of chairs, tables or khats can be negative");
    }
}

function brickCalculator(buildingHeight){
    totalBricks = 0;
    if(buildingHeight>10){
        totalBricks = 15000 * 10;
        buildingHeight -= 10;
        if(buildingHeight>10){
            totalBricks += 120000;
            buildingHeight -= 10;
            totalBricks = (totalBricks)+(buildingHeight*10000);
        } 
        else{
            totalBricks = (totalBricks)+(buildingHeight*12000);
        }
    }
    else{
        totalBricks = (totalBricks)+(buildingHeight*15000);
    }
    return totalBricks;
}
function tinyFriend(){
    length = 1000;
    let friend = "";
    for(var name in arguments){
        if(arguments[name].length<length){
            friend = arguments[name];
        }
    }
    return friend;
}


