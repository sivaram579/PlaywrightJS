# Playwright Test Automation Project

This project contains automated tests for the Sauce Demo website using Playwright.

## Prerequisites

- Node.js (v14 or higher)
- npm (Node Package Manager)
- Playwright

## Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies:
```bash
npm install
```

3. Install Playwright browsers:
```bash
npx playwright install
```

## Project Structure

```
├── pages/                 # Page Object Model classes
│   ├── LoginPage.js      # Login page interactions
│   └── HomePage.js       # Home page interactions
├── tests/                # Test files
│   ├── tc004_loginTest.spec.js
│   ├── tc005_placeOrder.spec.js
│   └── tc006_testHooks.spec.js
├── playwright.config.js  # Playwright configuration
└── package.json         # Project dependencies
```

## Running Tests

### Run all tests
```bash
npx playwright test
```

### Run tests in a specific browser
```bash
npx playwright test --project=chromium
npx playwright test --project=firefox
npx playwright test --project=webkit
```

### Run tests in UI mode
```bash
npx playwright test --ui
```

### Run tests in debug mode
```bash
npx playwright test --debug
```

### Run specific test file
```bash
npx playwright test tests/tc004_loginTest.spec.js
```

## Viewing Test Reports

After running tests, you can view the HTML report:
```bash
npx playwright show-report
```

## Test Cases

### Login Test (tc004_loginTest.spec.js)
- Navigates to the login page
- Logs in with valid credentials
- Verifies successful login
- Logs out

### Place Order Test (tc005_placeOrder.spec.js)
- Logs in to the application
- Validates backpack item
- Adds item to cart
- Opens cart and proceeds to checkout
- Logs out

### Test Hooks (tc006_testHooks.spec.js)
- Demonstrates test hooks and setup/teardown
- Includes place order flow
- Handles cleanup after tests

## Configuration

The project uses the following configuration in `playwright.config.js`:
- Base URL: https://www.saucedemo.com
- Test directory: ./tests
- HTML reporter for test results
- Support for multiple browsers (Chromium, Firefox, WebKit)
- Mobile device emulation support

## Best Practices

1. **Page Object Model**: Each page has its own class with relevant methods
2. **Test Isolation**: Each test is independent and self-contained
3. **Proper Assertions**: Using Playwright's built-in assertions
4. **Clean Code**: Following JavaScript best practices
5. **Proper Error Handling**: Graceful handling of test failures

## Troubleshooting

If you encounter any issues:

1. Ensure all dependencies are installed correctly
2. Check if browsers are properly installed
3. Verify the test environment setup
4. Check the test reports for detailed error information

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests to ensure everything works
5. Submit a pull request

## License

This project is licensed under the MIT License - see the LICENSE file for details. 