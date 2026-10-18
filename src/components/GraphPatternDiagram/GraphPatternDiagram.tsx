import './GraphPatternDiagram.css';

// A conceptual illustration of structural patterns—not experimental output.
const nodes = [
  { label: 'A', x: 48, y: 112 },
  { label: 'B', x: 75, y: 50 },
  { label: 'C', x: 130, y: 100 },
  { label: 'D', x: 44, y: 174 },
  { label: 'E', x: 104, y: 167 },
  { label: 'F', x: 171, y: 145 },
  { label: 'G', x: 177, y: 51 },
  { label: 'H', x: 174, y: 200 }
] as const;

const walkNodes = new Set(['B', 'C', 'E', 'F']);

export default function GraphPatternDiagram() {
  return (
    <figure className="graph-study">
      <div className="graph-study__heading">
        <span>GRAPHITI / STRUCTURAL LEARNING</span>
        <span>FIG. 01</span>
      </div>
      <svg
        className="graph-study__drawing"
        viewBox="0 0 390 268"
        role="img"
        aria-label="Conceptual input graph with random walk B to C to E to F highlighted in yellow. An arrow leads to examples of a triangle motif and an open path motif."
      >
        <text className="graph-study__label" x="17" y="18">01 / INPUT GRAPH</text>
        <text className="graph-study__label" x="258" y="18">02 / MOTIFS</text>

        {/* Graph adjacency: a pair of triangles connected to open paths. */}
        <path
          className="graph-study__edge"
          d="M48 112 L75 50 M75 50 L130 100 M130 100 L48 112 M48 112 L44 174 M44 174 L104 167 M104 167 L130 100 M130 100 L171 145 M171 145 L104 167 M130 100 L177 51 M177 51 L171 145 M171 145 L174 200 M174 200 L104 167"
        />
        {/* One valid walk through the graph: B → C → E → F. */}
        <path className="graph-study__walk-glow" d="M75 50 L130 100 L104 167 L171 145" />
        <path className="graph-study__walk" d="M75 50 L130 100 L104 167 L171 145" />
        {nodes.map(({ label, x, y }) => (
          <g
            key={label}
            className={walkNodes.has(label) ? 'graph-study__node graph-study__node--walk' : 'graph-study__node'}
          >
            <circle cx={x} cy={y} r="12" />
            <text x={x} y={y + 3.5} textAnchor="middle">{label}</text>
          </g>
        ))}

        <path className="graph-study__connector" d="M207 116 H239" />
        <path className="graph-study__connector" d="M233 110 L239 116 L233 122" />

        {/* A closed three-node subgraph (triangle), present at A–B–C. */}
        <path className="graph-study__motif-edge" d="M281 52 L322 52 L301.5 91 Z" />
        <circle className="graph-study__motif-node" cx="281" cy="52" r="5" />
        <circle className="graph-study__motif-node" cx="322" cy="52" r="5" />
        <circle className="graph-study__motif-node" cx="301.5" cy="91" r="5" />
        <text className="graph-study__motif-caption" x="301" y="114" textAnchor="middle">TRIANGLE</text>

        {/* A three-node open path, another basic graph structural motif. */}
        <path className="graph-study__motif-edge" d="M273 171 L303 144 L333 171" />
        <circle className="graph-study__motif-node" cx="273" cy="171" r="5" />
        <circle className="graph-study__motif-node" cx="303" cy="144" r="5" />
        <circle className="graph-study__motif-node" cx="333" cy="171" r="5" />
        <text className="graph-study__motif-caption" x="303" y="194" textAnchor="middle">OPEN PATH</text>

        <path className="graph-study__divider" d="M16 223 H374" />
        <text className="graph-study__walk-label" x="17" y="244">SAMPLED WALK</text>
        <text className="graph-study__sequence" x="373" y="244" textAnchor="end">B → C → E → F</text>
      </svg>
      <figcaption className="graph-study__caption">
        <span>RANDOM WALKS</span>
        <span className="graph-study__arrow" aria-hidden="true">→</span>
        <span>STRUCTURAL PATTERNS</span>
        <span className="graph-study__arrow" aria-hidden="true">→</span>
        <span>REPRESENTATIONS</span>
      </figcaption>
      <p className="graph-study__disclaimer">Conceptual illustration · not experimental output</p>
    </figure>
  );
}
