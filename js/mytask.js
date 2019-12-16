'use strict'
var CLOUD_WIDTH = 500;
var CLOUD_HEIGHT = 240;
var START_COORD_X = 100;
var START_COORD_Y = 50;

var renderCloud = function(ctx,x,y,color){
    ctx.fillStyle = color;
    ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
};

var getMax = function(times){
    var max = times[0];
  for (var i = 1; i < times.length;i++){
      if (times[i] > max){
          max = times[i];
      }
  }
  return max;
};

window.renderStatistics = function(ctx,players,times){


    renderCloud(ctx, START_COORD_X, START_COORD_Y, 'rgb(255,255,255)');
    ctx.font = '24px Tahoma';



    var maxSize = getMax(times);

    for (var i = 0; i < times.length;i++){
        if (players[i].toUpperCase() === 'Вы'.toUpperCase()){
            ctx.fillStyle = 'rgb(255,0,0)';
            ctx.fillRect(START_COORD_X+30 + 80*i,START_COORD_Y+CLOUD_HEIGHT-40,50,-((200*times[i]) / maxSize));
            ctx.fillText(players[i],START_COORD_X+30 + 80*i,START_COORD_Y+CLOUD_HEIGHT-10);
        } else {
            ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
            ctx.fillRect(START_COORD_X+30 + 80*i,START_COORD_Y+CLOUD_HEIGHT-40,50,-((200*times[i]) / maxSize));
            ctx.fillText(players[i],START_COORD_X+30 + 80*i,START_COORD_Y+CLOUD_HEIGHT-10);
        }
    }
}