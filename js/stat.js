'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var RECT_GAP = 50;
var PADDING = 20;
var TEXT_HEIGHT = 16;
var TEXT_WIDTH = 50;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150 - TEXT_HEIGHT;
var MAX_RANDOM_INT = 100;


var renderCloud = function(ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function(arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

window.renderStatistics = function(ctx, players, times) {
  renderCloud(ctx, CLOUD_X + GAP, CLOUD_Y + GAP, 'rgba(0, 0, 0, 0.7)');
  renderCloud(ctx, CLOUD_X, CLOUD_Y, '#fff');

  ctx.fillStyle = '#000';

  ctx.font = '16px PT Mono';
  ctx.textBaseline = 'hanging';
  ctx.fillText('Ура вы победили!', CLOUD_X + PADDING, CLOUD_Y + PADDING);
  ctx.fillText('Список результатов:', CLOUD_X + PADDING, CLOUD_Y + PADDING * 2);

  var maxTime = getMaxElement(times);

  for (var i = 0; i < players.length; i++) {
    var barHeight = -(MAX_BAR_HEIGHT * times[i]) / maxTime;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), CLOUD_X + RECT_GAP + (RECT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - RECT_GAP + barHeight - TEXT_HEIGHT - GAP);
    ctx.fillText(players[i], CLOUD_X + RECT_GAP + (RECT_GAP + BAR_WIDTH) * i, CLOUD_Y + CLOUD_HEIGHT - PADDING - TEXT_HEIGHT);

    function getRandomInt(max) {
      return Math.floor(Math.random() * Math.floor(max));
    }

    if (players[i] === 'Вы') {
      ctx.fillStyle = 'rgba(255, 0, 0, 1)';
    } else {
      ctx.fillStyle = 'hsl(240,' + getRandomInt(MAX_RANDOM_INT) + '%, 50%)';
    }

    ctx.fillRect(CLOUD_X + RECT_GAP + (RECT_GAP + BAR_WIDTH) * i, CLOUD_Y - RECT_GAP + CLOUD_HEIGHT, BAR_WIDTH, barHeight);

  }
};
