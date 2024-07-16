# Developer Connect

## Development

Create a fork and local copy of this repo. Answer _Y_ to create a local clone.
```bash
gh repo fork bcgov/developer.connect
```

Change into the directory and install the packages.
```bash
cd developer.connect/web/site
pnpm install
```

Startup the development environment.
```bash
pnpm run dev
```

## How to Contribute

If you would like to contribute, please see our [CONTRIBUTING](./CONTRIBUTING.md) guidelines.

See the [Documentation](https://github.com/bcgov/sbc-apigw/tree/main/web/site/docs/README.md) for specific guidelines on writing and styling documentation.

Please note that this project is released with a [Contributor Code of Conduct](./CODE_OF_CONDUCT.md).
By participating in this project you agree to abide by its terms.

## Testing

Run Vitest in watch mode for unit tests
```bash
pnpm test
or
pnpm test:unit
```

Run Playwright e2e tests in headless mode
```bash
cd developer.connect/web/site
pnpm test:e2e
```

Run Playwright e2e tests in Playwright UI
```bash
pnpm run dev
pnpm test:e2e:ui
```

## License
Copyright © 2024 Province of British Columbia

Licensed under the BSD 3 Clause License, (the "License");
you may not use this file except in compliance with the License.
The template for the license can be found here
   https://opensource.org/license/bsd-3-clause/

Redistribution and use in source and binary forms,
with or without modification, are permitted provided that the
following conditions are met:

1. Redistributions of source code must retain the above copyright notice,
   this list of conditions and the following disclaimer.

2. Redistributions in binary form must reproduce the above copyright notice,
   this list of conditions and the following disclaimer in the documentation
   and/or other materials provided with the distribution.

3. Neither the name of the copyright holder nor the names of its contributors
   may be used to endorse or promote products derived from this software
   without specific prior written permission.

THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS “AS IS”
AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO,
THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
ARE DISCLAIMED. IN NO EVENT SHALL THE COPYRIGHT HOLDER OR CONTRIBUTORS BE
LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR
CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF
SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS
INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN
CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE)
ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE
POSSIBILITY OF SUCH DAMAGE.
