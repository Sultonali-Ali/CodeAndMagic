'use strict';
(function () {
    var CLOUD_WIDTH = 420;
    var CLOUD_HEIGHT = 270;
    var START_COORD_X = 100;
    var START_COORD_Y = 10;

    var renderCloud = function(ctx,x,y,color){
        ctx.fillStyle = 'rgba(0, 0, 0, 0.7)';
        ctx.fillRect(x+10,y+10,CLOUD_WIDTH,CLOUD_HEIGHT);
        ctx.fillStyle = color;
        ctx.fillRect(x,y,CLOUD_WIDTH,CLOUD_HEIGHT);
        ctx.fillStyle = 'rgb(0,0,0)';
        ctx.font = "16px 'PT Mono'";
        ctx.textBaseline = 'hanging';

        ctx.fillText('Ура вы победили!',x+100,y+10);
        ctx.fillText('Список результатов:',x+100,y+30);
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
        ctx.font = "16px 'PT Mono'";



        var maxSize = getMax(times);

        for (var i = 0; i < times.length;i++){
            if (players[i].toUpperCase() === 'Вы'.toUpperCase()){
                ctx.fillStyle = 'rgb(255,0,0)';
                ctx.fillRect(START_COORD_X+55 + 90*i,START_COORD_Y+CLOUD_HEIGHT-30,50,-((150*times[i]) / maxSize));
                ctx.fillText(players[i],START_COORD_X+55 + 90*i,START_COORD_Y+CLOUD_HEIGHT-20);
            } else {
                ctx.fillStyle = 'rgba(0,0,255,' + Math.random() + ')';
                ctx.fillRect(START_COORD_X+55 + 90*i,START_COORD_Y+CLOUD_HEIGHT-30,50,-((150*times[i]) / maxSize));
                ctx.fillText(players[i],START_COORD_X+55 + 90*i,START_COORD_Y+CLOUD_HEIGHT-20);
            }
        }
    };
})();