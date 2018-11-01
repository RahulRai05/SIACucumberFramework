package sia.cucumber.test;


import java.util.List;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.NoSuchElementException;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class SSUserProfileTestDef 
    
{
   
  static WebDriver driver;
  static WebDriverWait wait =null;  
  
  protected boolean isElementPresent(By locator) {
	  try {
		driver.findElement(locator);
		  return true;
	} catch (NoSuchElementException  e) {
		return false;
	}
  }
  
    @Given("^open \"([^\"]*)\" in \"([^\"]*)\"$")
    public void open_Url(String url, String browser) throws Exception {
        driver = SetUp.getDriver(url,browser);
         wait=new WebDriverWait(driver, 60);
    }

    @When("^Log-In Button is clicked$")
    public void clcik_Login () throws Exception {
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.className("login")));
    	driver.findElement(By.className("login")).click();
    	driver.findElement(By.className("LoginButtons__emailLogo-1TRsT")).click();
        
    }

    
   @When("^\"([^\"]*)\" and \"([^\"]*)\" is entered$")
    public void and_is_entered(String userId, String password) throws Exception {
        driver.findElement(By.xpath("//input[@name='email']")).sendKeys(userId);
        driver.findElement(By.id("password")).sendKeys(password);
        
        driver.findElement(By.xpath("//div[@class='js-progressionButton']/button")).click();
    }

    @Then("^Verify Login Success Message$")
    public void verify_Login_Success_Message(DataTable data) throws Exception {
    	List<List<String>> text= data.raw();
    	Thread.sleep(5000);
    
    	driver.findElement(By.className("login")).click(); 
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(@class,'Header__greeting-3saCD')]")));
    	Assert.assertEquals(driver.findElement(By.xpath("//span[contains(@class,'Header__greeting-3saCD')]")).getText(), text.get(0).get(0));  /*Verify Hi there! */
    	Assert.assertEquals(driver.findElement(By.xpath("//span[contains(@class,'Header__email-2aj2p')]")).getText(), text.get(1).get(0));  /*Verify Email of Login User */
    	
    	/*driver.findElement(By.xpath("//span[@class='HeaderTab__text-ZVTEX']")).click();*/
    	
    		
    	
    }
    
    @Given("^Already Logged In$")
    public void already_Logged_In() throws Exception {
    	Thread.sleep(3000);
     Assert.assertEquals(driver.findElement(By.xpath("//span[@id='authentication-link']")).getText(),"Account"); /*If User is Already Logged In Account will be coming Instead of Log In*/
     driver.findElement(By.className("login")).click();   /*Click on Account*/
    }
    
    @When("^Sign Out Button Is clicked$")
    public void click_Logout() throws Exception {
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//span[contains(@class,'Header__greeting-3saCD')]")));
    	driver.findElement(By.xpath("//div[@class='Logout-1SIa1']/button")).click();  /*Click on Logout */
    	driver.findElement(By.xpath("//div[starts-with(@class,'bpk-modal__content-2wG5a')]/button[2]")).click();
       
    }

    @Then("^Verify Successful Logout$")
    public void verify_Successful_Logout(DataTable data) throws Exception {
    	List<List<String>> text= data.raw();
    	Thread.sleep(3000);
    	Assert.assertEquals(driver.findElement(By.className("login")).getText() ,text.get(0).get(0));
    
    }
    
    @Given("^Already User Profile Page$")
    public void already_User_Profile() throws Exception{
    	boolean isProfilePageVisible = isElementPresent(By.xpath("//li[contains(@class,'border-top-J7PI0')]"));
    	if(isProfilePageVisible == false) {
    		driver.findElement(By.xpath("//span[@id='authentication-link']")).click();
    		
    		
    	}
    }
    
    @When("^Add a traveller button is clicked$")
    public void clcik_Add_Traveller() throws Exception{
    	driver.findElement(By.xpath("//li[contains(@class,'border-top-J7PI0')]")).click();
    }
    
    @When("^Personal Details are entered$")
    public void enter_personal_Details(DataTable data) throws Exception{
    	List<List<String>> details= data.raw();
    	driver.findElement(By.id("title")).sendKeys(details.get(0).get(0));
    	driver.findElement(By.id("firstName")).sendKeys(details.get(0).get(1));
    	driver.findElement(By.id("lastName")).sendKeys(details.get(0).get(2));
    	
    	Select gender = new Select(driver.findElement(By.id("gender")));
    	gender.selectByValue(details.get(0).get(3));
    	
    	Select nationality = new Select(driver.findElement(By.id("nationalityId")));
    	nationality.selectByIndex(150);
    	    	
    	driver.findElement(By.id("phone")).sendKeys(details.get(0).get(4));
    	
    	
    	
    }
    
    @When("^Save Traveller is clicked")
    public void save_Traveller() throws Exception{
    	driver.findElement(By.xpath("//button[text()='Save traveller']")).click(); 	
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[text()='Delete traveller']")));
    }
    
    @Then("^Verify Added Traveller details \"([^\"]*)\"$")
    public void verify_Travelleradded(String name) throws Exception {
    	
    	Assert.assertEquals(driver.findElement(By.xpath("//div[@class='SubpageHeader-2g1Nf']/span")).getText(), name);
    	
      
    }

    @When("^Traveller Details are opened$")
    public void travel_Details_are_opened() throws Exception {
    	driver.findElement(By.xpath("//li[contains(@class,'border-top-J7PI0')]")).click();
    }

    @When("^Delete button is clicked$")
    public void delete_button_is_clicked() throws Exception {
        driver.findElement(By.xpath("//div[@class='DeleteTraveller-3nM8i']/button")).click();
        driver.findElement(By.xpath("//div[contains(@class,'bpk-modal__content-2wG5a')]/button[2]")).click();
      
    }

    @Then("^Verify Successful deletion of traveller \"([^\"]*)\"$")
    public void successful_Deletion(String delMessage) throws Exception {
    	wait.until(ExpectedConditions.visibilityOfElementLocated(By.xpath("//button[text()='OK']")));
    	Assert.assertEquals(driver.findElement(By.xpath("//div[@class='AsyncActionDialogButton__dialog-content-9bPJs']/span[1]")).getText(), delMessage);
    	Assert.assertEquals(driver.findElement(By.xpath("//div[@class='AsyncActionDialogButton__dialog-content-9bPJs']/span[2]")).getText(), "Traveller has now been successfully deleted.");
    	
    	driver.findElement(By.xpath("//button[text()='OK']")).click();
    }


    
   @After
    public void closeBrowser() {
    	driver.quit();
    }
    
}
