class Graph {
  constructor(noOfVertices) {
    this.noOfVertices = noOfVertices;
    this.AdjList = new Map();
  }
  addVertex(v) {
    return this.AdjList.set(v, []);
  }

  addEdge(v, w) {
    this.AdjList.get(v).push(w);
    this.AdjList.get(w).push(v);
  }

  printGraph() {
    let vertices = this.AdjList.keys();
    for (let vertex of vertices) {
      let values = this.AdjList.get(vertex);
      let str = "";
      for (let value of values) {
        str += value + " ";
      }
      console.log(`${vertex} -> ${str}`);
    }
  }

  dfs(startingNode) {
    var visited = [];
    for (let i = 0; i < this.noOfVertices; i++) {
      visited[i] = false;
    }

    this.DFSUtil(startingNode, visited);
  }

  DFSUtil(vertex, visited) {
    visited[vertex] = true;
    console.log(vertex);
    let adjacentVertices = this.AdjList.get(vertex);
    for (let i in adjacentVertices) {
      let elm = adjacentVertices[i];
      if (!visited[elm]) {
        this.DFSUtil(elm, visited);
      }
    }
  }
}

// run

var g = new Graph(6);
var vertices = ["A", "B", "C", "D", "E", "F"];

// adding vertices
for (var i = 0; i < vertices.length; i++) {
  g.addVertex(vertices[i]);
}

// adding edges
g.addEdge("A", "B");
g.addEdge("A", "D");
g.addEdge("A", "E");
g.addEdge("B", "C");
g.addEdge("D", "E");
g.addEdge("E", "F");
g.addEdge("E", "C");
g.addEdge("C", "F");

g.dfs("A");
// g.printGraph();
