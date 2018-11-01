package sia.cucumber.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;


public class SetUp {
	 
	    
	    public static WebDriver getDriver(String Url, String browser) {
	    	WebDriver driver=null;
	    	
	    	if(browser.equals("CH")) {
	    		System.setProperty("webdriver.chrome.driver","/Users/Pactera/Downloads/chromedriver_win32 (1)/chromedriver.exe");
		    	 driver = new ChromeDriver();
	    	}
	    	else if(browser.equals("IE")){
	    		System.setProperty("webdriver.ie.driver","/Users/Pactera/Downloads/IEDriverServer_x64_3.14.0/IEDriverServer.exe");
		    	 driver = new InternetExplorerDriver();
	    	}
	    	
	    	else {
	    		driver=new FirefoxDriver();
	    	}
	    	
			driver.get(Url);
			driver.manage().window().maximize();
			driver.manage().timeouts().pageLoadTimeout(100,TimeUnit.SECONDS);
			driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
	    	return driver;
	    }

}
