'use strict';

var CLOUD_WIDTH = 420;
var CLOUD_HEIGHT = 270;
var CLOUD_X = 100;
var CLOUD_Y = 10;
var GAP = 10;
var RECT_GAP = 50;
var PADDING = 20;
var TEXT_HEIGHT = 16;
var BAR_WIDTH = 40;
var MAX_BAR_HEIGHT = 150 - TEXT_HEIGHT;
var MAX_SATURATION_VALUE = 100;

var renderCloud = function (ctx, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, CLOUD_WIDTH, CLOUD_HEIGHT);
};

var getMaxElement = function (arr) {
  var maxElement = arr[0];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > maxElement) {
      maxElement = arr[i];
    }
  }

  return maxElement;
};

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max + 1));
}

window.renderStatistics = function (ctx, players, times) {
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
    var barX = CLOUD_X + RECT_GAP + (RECT_GAP + BAR_WIDTH) * i;

    ctx.fillStyle = '#000';
    ctx.fillText(Math.round(times[i]), barX, CLOUD_Y + CLOUD_HEIGHT - RECT_GAP + barHeight - TEXT_HEIGHT - GAP);
    ctx.fillText(players[i], barX, CLOUD_Y + CLOUD_HEIGHT - PADDING - TEXT_HEIGHT);

    ctx.fillStyle = players[i] === 'Вы' ? 'rgba(255, 0, 0, 1)' : 'hsl(240,' + getRandomInt(MAX_SATURATION_VALUE) + '%, 50%)';

    ctx.fillRect(barX, CLOUD_Y - RECT_GAP + CLOUD_HEIGHT, BAR_WIDTH, barHeight);

  }
};
