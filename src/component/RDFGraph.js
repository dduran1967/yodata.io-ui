import stampit from 'stampit';
import $rdf from 'rdflib';

const RDFGraph = stampit({init: function(options,{instance}) {
    instance.graph = $rdf.graph();
    instance.fetcher = $rdf.fetcher(instance.graph);
  }})
  .methods({
    getGraph() {
      return this.graph;
    }
  })

// const RDFGraph = (options) => collectionStamp(options);
window.RDFGraph = RDFGraph;
// window.collectionStamp = collectionStamp;
export default RDFGraph;
