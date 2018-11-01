package sia.cucumber.test;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class SSFlightBookingTestDef {
	static WebDriver driver;
	  static WebDriverWait wait =null;  
	  
	  
	  
	 
	  @Before("@withLogin")
	  public void userLogin() {
		  wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("login")));
	    	driver.findElement(By.className("login")).click();
	    	driver.findElement(By.className("LoginButtons__emailLogo-1TRsT")).click();
	    	driver.findElement(By.xpath("//input[@name='email']")).sendKeys("rahulrai0501@gmail.com");
	        driver.findElement(By.id("password")).sendKeys("March@2018");
	        driver.findElement(By.xpath("//div[@class='js-progressionButton']/button")).click();
	        wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(@class,'Header__greeting-3saCD')]")));
	    	Assert.assertEquals(driver.findElement(By.xpath("//span[contains(@class,'Header__greeting-3saCD')]")).getText(), "Verify Hi there!");  /*Verify Hi there! */
	  }
	  
	  @After
	  public void closeBrowser() {
		 driver.quit();
	  }
	  
	  @Given("^Open SkyScanner web url \"([^\"]*)\" in browser \"([^\"]*)\"$")
	    public void open_Url(String url, String browser) throws Exception {
	        driver = SetUp.getDriver(url,browser);
	         wait=new WebDriverWait(driver, 60);
	    }
	  
	  @When("^On \"([^\"]*)\" Booking Tab$")
	  public void select_BookingTab(String tab) {
		  if(tab.contains("Hotels")) {
			  driver.findElement(By.xpath("//span[text()='Hotels']")).click();
		  }
		  else if(tab.contains("Car")) {
			  driver.findElement(By.xpath("//span[text()='Car Hire']")).click();
		  }
		  
		  else {
			  driver.findElement(By.xpath("//span[text()='Flights']")).click();
		  }
			  
	  }

}
