class TodoApi {
  static new() {
    return new TodoApi();
  }

  async getTodos() {
    return [
      {id: '0', work: 'Feed my puppy', done: false},
      {id: '1', work: 'Read 10 pages of book', done: false},
      {id: '2', work: 'Practice React', done: false},
      {id: '3', work: 'Watch live stream', done: false},
      {id: '4', work: 'Complete Stray game', done: true},
    ];
  }
}

const todoApi = TodoApi.new();
export {todoApi};