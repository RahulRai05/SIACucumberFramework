package sia.cucumber.main.test;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "Feature", glue = {"sia.cucumber.test"}, dryRun = false, monochrome = true,
		plugin={"pretty","html:TestReport/HTML","json:TestReport/JSON/JsonReport.json"}, strict = false,
		tags = {"~@negative"})
public class SSTestRunner {

}