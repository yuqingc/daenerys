import { merge } from 'lodash';
import bookResolver from './bookResolver';
import personResolver from './personResolver';

export default merge(
    bookResolver,
    personResolver,
)