'use strict';

const assert = require('assert');

const StatusTweet = require('../../src/tweets/status_tweet');
const Image = require('../../src/image');

describe('Image', () => {
  let image = new Image('😱', 'http://example.com', 'some_image', 'some_image_signature');

  describe('#getText()', () => {
    it('should return a tweet', () => {
      let tweet = new StatusTweet(image);

      assert.equal(tweet.getText(), '😱 http://example.com some_image some_image_signature');
    });
  });
});
