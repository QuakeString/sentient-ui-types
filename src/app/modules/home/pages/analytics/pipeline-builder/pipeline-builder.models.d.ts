export declare enum PipelineNodeCategory {
    SOURCE = "SOURCE",
    FILTER = "FILTER",
    MATH = "MATH",
    SPECTRAL = "SPECTRAL",
    STATISTICAL = "STATISTICAL",
    ML = "ML",
    DOMAIN = "DOMAIN",
    OUTPUT = "OUTPUT"
}
export interface ConfigField {
    key: string;
    label: string;
    type: 'number' | 'string' | 'select' | 'boolean' | 'column' | 'string_array' | 'number_array' | 'object_array';
    required?: boolean;
    default?: any;
    min?: number;
    max?: number;
    step?: number;
    options?: {
        value: any;
        label: string;
    }[];
    hint?: string;
    /** For object_array: nested field definitions */
    fields?: ConfigField[];
    /** Conditionally show this field only when another field has a specific value */
    visibleWhen?: {
        key: string;
        value: any;
    };
    /** Whether this field references an input key or output key for schema propagation */
    role?: 'input_key' | 'output_key';
}
export interface PipelineNodeDefinition {
    type: string;
    name: string;
    description: string;
    category: PipelineNodeCategory;
    icon: string;
    color: string;
    defaultConfig: any;
    hasInput: boolean;
    hasOutput: boolean;
    configFields?: ConfigField[];
    relationTypes?: string[];
    /** Custom output schema computation (if not provided, uses default pass-through + output_key fields) */
    computeOutputKeys?: (inputKeys: string[], config: any) => string[];
}
export interface PipelineNode {
    id: string;
    type: string;
    name: string;
    x: number;
    y: number;
    configuration: any;
}
export interface PipelineEdge {
    id: string;
    sourceNodeId: string;
    targetNodeId: string;
    label?: string;
}
export interface PipelineGraph {
    nodes: PipelineNode[];
    edges: PipelineEdge[];
}
export interface ConnectorPosition {
    nodeId: string;
    side: 'input' | 'output';
    x: number;
    y: number;
}
export declare const NODE_WIDTH = 170;
export declare const NODE_HEIGHT = 44;
export declare const CONNECTOR_SIZE = 12;
export declare const CORNER_RADIUS = 8;
export declare const CATEGORY_COLORS: Record<PipelineNodeCategory, string>;
export declare const CATEGORY_LABELS: Record<PipelineNodeCategory, string>;
export declare const NODE_DEFINITIONS: PipelineNodeDefinition[];
/**
 * Compute orthogonal path with rounded corners between two points.
 * Source connector is on the RIGHT side of a node, destination on the LEFT.
 *
 * The path goes: horizontal -> rounded turn -> vertical -> rounded turn -> horizontal
 *
 *   Source ------+
 *                |       (with rounded corners at the bends)
 *                +------ Destination
 */
export declare function computeOrthogonalPath(x1: number, y1: number, x2: number, y2: number, radius?: number): string;
export declare function generateId(): string;
export declare function getNodeDefinition(type: string): PipelineNodeDefinition | undefined;
export declare function getNodesByCategory(): Map<PipelineNodeCategory, PipelineNodeDefinition[]>;
/**
 * Convert visual pipeline graph to the JSON configuration format
 * expected by the analytics engine.
 *
 * Saves both:
 * - `transforms`: topologically sorted processing nodes for the engine
 * - `graph`: full visual layout (node positions, edges) for the builder
 */
export declare function graphToConfiguration(graph: PipelineGraph): any;
/**
 * Parse analytics pipeline configuration JSON into a visual graph.
 *
 * Supports three formats:
 * 1. Full graph layout: `{graph: {nodes, edges}, transforms}` — saved by the builder
 * 2. Transforms only: `{transforms: [{type, config}]}` — linear chain reconstruction
 * 3. Nodes/edges: `{nodes: [{type, name, config}], edges: [{from, to}]}` — API shorthand
 */
export declare function configurationToGraph(config: any): PipelineGraph;
/**
 * Determine the role of a config field for schema propagation.
 * Uses explicit `role` if set, otherwise auto-detects from field key name.
 */
export declare function getFieldRole(field: ConfigField): 'input_key' | 'output_key' | null;
/**
 * Compute the output schema for a node given its definition, upstream input keys, and current config.
 * Default: pass through all input keys + add values from output_key fields.
 */
export declare function computeNodeOutputSchema(def: PipelineNodeDefinition, inputKeys: string[], config: any): string[];
