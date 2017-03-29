import root from 'window-or-global'
import {Graph} from '../lib/Graph'

const schemas = new Graph();
export default schemas;

root.schemas = schemas;
