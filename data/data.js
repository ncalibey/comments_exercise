const { readFileSync } = require('fs');
const path = require('path');
const DATA_FILE_PATH = path.join(__dirname, 'comments.json');

const data = {
  getCommentsWithOneReply: () => {
    const comments = JSON.parse(readFileSync(DATA_FILE_PATH));

    return comments.map((c) => ({
      id: c.id,
      author: c.author,
      body: c.body,
      postedAt: c.postedAt,
      replies: [Object.assign(c.replies[0])]
    }));
  },

  getRepliesForComment: (id) => {
    const comments = JSON.parse(readFileSync(DATA_FILE_PATH));
    return comments.find((c) => c.id === id).replies;
  }
}

module.exports = data;
