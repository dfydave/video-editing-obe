import Fuse from 'fuse.js';
import type { Resource } from './types';


export function makeFuse(resources: Resource[]) {
return new Fuse(resources, {
keys: ['name', 'summary', 'tags', 'category', 'useCases'],
threshold: 0.34,
includeScore: false,
});
}
