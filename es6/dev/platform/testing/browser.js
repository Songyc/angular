import { TEST_BROWSER_STATIC_PLATFORM_PROVIDERS, ADDITIONAL_TEST_BROWSER_PROVIDERS } from 'angular2/platform/testing/browser_static';
import { BROWSER_APP_PROVIDERS } from 'angular2/platform/browser';
import { CONST_EXPR } from 'angular2/src/facade/lang';
/**
 * Providers for using template cache to avoid actual XHR.
 * Re-exported here so that tests import from a single place.
 */
export { CACHED_TEMPLATE_PROVIDER } from 'angular2/platform/browser';
/**
 * Default patform providers for testing.
 */
export const TEST_BROWSER_PLATFORM_PROVIDERS = CONST_EXPR([TEST_BROWSER_STATIC_PLATFORM_PROVIDERS]);
/**
 * Default application providers for testing.
 */
export const TEST_BROWSER_APPLICATION_PROVIDERS = CONST_EXPR([BROWSER_APP_PROVIDERS, ADDITIONAL_TEST_BROWSER_PROVIDERS]);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnJvd3Nlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmZpbmdfcGx1Z2luX3dyYXBwZXItb3V0cHV0X3BhdGgtdWN0WUFhZXcudG1wL2FuZ3VsYXIyL3BsYXRmb3JtL3Rlc3RpbmcvYnJvd3Nlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiT0FBTyxFQUNMLHNDQUFzQyxFQUN0QyxpQ0FBaUMsRUFDbEMsTUFBTSwwQ0FBMEM7T0FDMUMsRUFBQyxxQkFBcUIsRUFBQyxNQUFNLDJCQUEyQjtPQUN4RCxFQUFDLFVBQVUsRUFBQyxNQUFNLDBCQUEwQjtBQUVuRDs7O0dBR0c7QUFDSCxTQUFRLHdCQUF3QixRQUFPLDJCQUEyQixDQUFDO0FBRW5FOztHQUVHO0FBQ0gsT0FBTyxNQUFNLCtCQUErQixHQUN4QyxVQUFVLENBQUMsQ0FBQyxzQ0FBc0MsQ0FBQyxDQUFDLENBQUM7QUFFekQ7O0dBRUc7QUFDSCxPQUFPLE1BQU0sa0NBQWtDLEdBQzNDLFVBQVUsQ0FBQyxDQUFDLHFCQUFxQixFQUFFLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIFRFU1RfQlJPV1NFUl9TVEFUSUNfUExBVEZPUk1fUFJPVklERVJTLFxuICBBRERJVElPTkFMX1RFU1RfQlJPV1NFUl9QUk9WSURFUlNcbn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vdGVzdGluZy9icm93c2VyX3N0YXRpYyc7XG5pbXBvcnQge0JST1dTRVJfQVBQX1BST1ZJREVSU30gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5pbXBvcnQge0NPTlNUX0VYUFJ9IGZyb20gJ2FuZ3VsYXIyL3NyYy9mYWNhZGUvbGFuZyc7XG5cbi8qKlxuICogUHJvdmlkZXJzIGZvciB1c2luZyB0ZW1wbGF0ZSBjYWNoZSB0byBhdm9pZCBhY3R1YWwgWEhSLlxuICogUmUtZXhwb3J0ZWQgaGVyZSBzbyB0aGF0IHRlc3RzIGltcG9ydCBmcm9tIGEgc2luZ2xlIHBsYWNlLlxuICovXG5leHBvcnQge0NBQ0hFRF9URU1QTEFURV9QUk9WSURFUn0gZnJvbSAnYW5ndWxhcjIvcGxhdGZvcm0vYnJvd3Nlcic7XG5cbi8qKlxuICogRGVmYXVsdCBwYXRmb3JtIHByb3ZpZGVycyBmb3IgdGVzdGluZy5cbiAqL1xuZXhwb3J0IGNvbnN0IFRFU1RfQlJPV1NFUl9QTEFURk9STV9QUk9WSURFUlM6IEFycmF5PGFueSAvKlR5cGUgfCBQcm92aWRlciB8IGFueVtdKi8+ID1cbiAgICBDT05TVF9FWFBSKFtURVNUX0JST1dTRVJfU1RBVElDX1BMQVRGT1JNX1BST1ZJREVSU10pO1xuXG4vKipcbiAqIERlZmF1bHQgYXBwbGljYXRpb24gcHJvdmlkZXJzIGZvciB0ZXN0aW5nLlxuICovXG5leHBvcnQgY29uc3QgVEVTVF9CUk9XU0VSX0FQUExJQ0FUSU9OX1BST1ZJREVSUzogQXJyYXk8YW55IC8qVHlwZSB8IFByb3ZpZGVyIHwgYW55W10qLz4gPVxuICAgIENPTlNUX0VYUFIoW0JST1dTRVJfQVBQX1BST1ZJREVSUywgQURESVRJT05BTF9URVNUX0JST1dTRVJfUFJPVklERVJTXSk7XG4iXX0=