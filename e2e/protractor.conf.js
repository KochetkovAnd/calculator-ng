exports.config = {
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
  
    
    specs: ['features/**/*.feature'],
  
    cucumberOpts: {
      require: ['steps/**/*.js'], // путь к файлам шагов
      format: 'json:./reports/results.json',
      profile: false,
      'no-source': true,
      strict: true
    },
  
    // Указываем браузер
    capabilities: {
      browserName: 'chrome',
      // chromeOptions: {
      //   args: ['--disable-gpu', '--no-sandbox'], // Добавьте '--headless', если нужен headless-режим
      // },      
    },
  
    
    directConnect: true,
  
    baseUrl: 'http://localhost:4200', 
  
    onPrepare: () => {
      browser.manage().window().maximize(); 
    }
  };