package sia.cucumber.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Test;
import junit.framework.TestCase;
import junit.framework.TestSuite;

/**
 * Unit test for simple App.
 */
public class SIATestDef 
    
{
    WebDriver driver= null;
    
    @Given("^open \"([^\"]*)\" in \"([^\"]*)\"$")
    public void open_Url(String url, String browser) throws Throwable {
        
    	System.setProperty("webdriver.chrome.driver","/Users/Pactera/Downloads/chromedriver_win32 (1)/chromedriver.exe");
		driver = new ChromeDriver();
		driver.get(url);
		driver.manage().window().maximize();
		driver.manage().timeouts().pageLoadTimeout(100,TimeUnit.SECONDS);
		driver.manage().timeouts().implicitlyWait(60, TimeUnit.SECONDS);
		
        
    }

    @When("^Log-In Button is clicked$")
    public void clcik_Login () throws Throwable {
        
    	driver.findElement(By.className("Log in")).click();
        throw new PendingException();
    }

    
   @When("^\"([^\"]*)\" and \"([^\"]*)\" is entered$")
    public void and_is_entered(String arg1, String arg2) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^Verify Login Success Message$")
    public void verify_Login_Success_Message(DataTable arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        throw new PendingException();
    }

    @Given("^Already Logged In$")
    public void already_Logged_In() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @When("^Sign Out Button Is clicked$")
    public void sign_Out_Button_Is_clicked() throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        throw new PendingException();
    }

    @Then("^Verify Successful Logout$")
    public void verify_Successful_Logout(DataTable arg1) throws Throwable {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
        // E,K,V must be a scalar (String, Integer, Date, enum etc)
        throw new PendingException();
    }


    
}
