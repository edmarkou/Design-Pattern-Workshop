const mediator = function () {
  const channels = {};

  const subscribe = function (channel, context, func) {
    if (!channels[channel]) {
      channels[channel] = [];
    }
    channels[channel].push({
      context,
      func
    })
  };

  const publish = function (channel) {
    if (!channels[channel]) {
      return false
    }

    const args = Array.prototype.slice.call(arguments, 1);

    for (let i = 0; i < channels[channel].length; i++) {
      const sub = channels[channel][i];
      sub.func.apply(sub.context, args)
    }
  }

  return { channels, subscribe, publish };
};

module.exports = mediator();