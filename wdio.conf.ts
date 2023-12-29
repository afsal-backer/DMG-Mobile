import type { Options } from '@wdio/types'
import path from "path";

export const config: Options.Testrunner = {

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,
    hostname: 'hub.browserstack.com',

    services: [
        [
          'browserstack',
          {
            app: './apps/dmgAndroid.apk',
            buildIdentifier: "${BUILD_NUMBER}",
            browserstackLocal: true
          },
        ]
      ],

    capabilities: [
        {
            platformName: "Android",
            'appium:deviceName': 'Google Pixel 6 Pro',
            'appium:platformVersion': '12.0',
            "appium:automationName": "UIAutomator2",
            "appium:app": path.join(process.cwd(), "./apps/dmgAndroid.apk"),
            "appium:autoGrantPermissions": true,
        }
    ],


    
    autoCompileOpts: {
        autoCompile: true,
        tsNodeOpts: {
            project: './tsconfig.json',
            transpileOnly: true
        }
    },

    specs: [
        './features/**/*.feature' 
    ],

  
    maxInstances: 1,

    logLevel: 'info',
    
    bail: 0,
  
    baseUrl: '',

    waitforTimeout: 10000,

    connectionRetryTimeout: 120000,

    connectionRetryCount: 3,

    //Local runner settings

    // services: [
    //     ['appium', {
    //         args: {
    //             allowInsecure: 'chromedriver_autodownload',
    //             relaxedSecurity: true
    //         }
    //     }],
    //     'browserstack'
    // ],

    // runner: 'local',
    // port: 4723,

    // capabilities: [
    //     {
    //         platformName: "Android",
    //         'appium:deviceName': 'Google Pixel 6 Pro',
    //         'appium:platformVersion': '12.0',
    //         "appium:automationName": "UIAutomator2",
    //         "appium:app": path.join(process.cwd(), "./apps/dmgAndroid.apk"),
    //         "appium:autoGrantPermissions": true,
    //     }
    // ],

    //Local runner settings

    framework: 'cucumber',
      
    reporters: [
        [
            'allure',
            {
                outputDir: 'allure-results',
                disableWebdriverStepsReporting: true,
                disableWebdriverScreenshotsReporting: false,
                useCucumberStepReporter: true,
                timeout: 180000
            }
        ],
        ['spec', []]
    ],

    cucumberOpts: {
        require: ['./features/step-definitions/*.ts'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
        failFast: false,
        snippets: true,
        source: true,
        strict: false,
        tagExpression: '',
        timeout: 180000,
        ignoreUndefinedDefinitions: false
    },
}
