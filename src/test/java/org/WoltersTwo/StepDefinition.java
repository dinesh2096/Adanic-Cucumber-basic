package org.WoltersTwo;

import java.io.File;
import java.io.IOException;

import org.apache.commons.io.FileUtils;
import org.openqa.selenium.Alert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.github.bonigarcia.wdm.WebDriverManager;

public class StepDefinition {
	WebDriver driver;
	@Given("user enter the page")
	public void user_enter_the_page() {
	    
		WebDriverManager.chromedriver().setup();
		driver = new ChromeDriver();
		driver.manage().window().maximize();
		driver.get("http://adactinhotelapp.com/");
	}

	@When("user enter the data{string} and {string}")
	public void user_enter_the_data_and(String email, String password) {
	    
		WebElement user = driver.findElement(By.id("username"));
		user.sendKeys(email);
		WebElement pass = driver.findElement(By.id("password"));
		pass.sendKeys(password);
	}

	@When("user click on the login")
	public void user_click_on_the_login() {
	  
		WebElement log = driver.findElement(By.id("login"));
		log.click();
	}
	
	@When("user select the location")
	public void user_select_the_location() {
	    
		WebElement lo = driver.findElement(By.id("location"));
		Select s = new Select(lo);
		s.selectByVisibleText("Sydney");	
	}

	@When("User select the Hotels")
	public void user_select_the_Hotels() {
	  
		WebElement ho = driver.findElement(By.id("hotels"));
		Select s = new Select(ho);
		s.selectByVisibleText("Hotel Creek");
		
	}

	@When("User select the Room Type")
	public void user_select_the_Room_Type() {
	   
		WebElement rt = driver.findElement(By.id("room_type"));
		Select s = new Select(rt);
		s.selectByVisibleText("Double");
	}

	@When("user select the No.of Rooms")
	public void user_select_the_No_of_Rooms() {
	   
		WebElement rn = driver.findElement(By.id("room_nos"));
		Select s = new Select(rn);
		s.selectByVisibleText("3 - Three");
	}

	@When("check in date")
	public void check_in_date() {
	    
		WebElement in = driver.findElement(By.id("datepick_in"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','18/12/2021')",in);
	}

	@When("Check out date")
	public void check_out_date() {
		WebElement out = driver.findElement(By.id("datepick_out"));
		JavascriptExecutor js = (JavascriptExecutor) driver;
		js.executeScript("arguments[0].setAttribute('value','19/12/2021')", out);
	}
	
	@When("Adults per room")
	public void adults_per_room() {
		
		WebElement ar = driver.findElement(By.id("adult_room"));
		Select s = new Select(ar);
		s.selectByVisibleText("2 - Two");
	}

	@When("Children per room")
	public void children_per_room() {
		WebElement cr = driver.findElement(By.id("child_room"));
		Select s = new Select(cr);
		s.selectByVisibleText("1 - One");
	}

	@When("search the hotel")
	public void search_the_hotel() {
	    
		WebElement search = driver.findElement(By.id("Submit"));
		search.click();
	}
	
	@When("button to continue")
	public void button_to_continue() {
	    
		WebElement rd = driver.findElement(By.id("radiobutton_0"));
		rd.click();
	}

	@When("click continue")
	public void click_continue() {
	    
		WebElement con = driver.findElement(By.id("continue"));
		con.click();
	}
	
	@When("user enter the FirstName{string}")
	public void user_enter_the_FirstName(String Firstname) {
	    
		WebElement first = driver.findElement(By.id("first_name"));
		first.sendKeys(Firstname);
	}

	@When("user enter the LastName{string}")
	public void user_enter_the_LastName(String Lastname) {
		WebElement last = driver.findElement(By.id("last_name"));
		last.sendKeys(Lastname);
	}

	@When("user enter the address{string}")
	public void user_enter_the_address(String address) {
		WebElement add = driver.findElement(By.id("address"));
		add.sendKeys(address);
	}

	@When("enter the CC{string}")
	public void enter_the_CC(String ccno) {
		WebElement cc = driver.findElement(By.id("cc_num"));
		cc.sendKeys(ccno);
	}

	@When("user select the CC type")
	public void user_select_the_CC_type() {
	   
		WebElement type = driver.findElement(By.id("cc_type"));
		Select s = new Select(type);
		s.selectByVisibleText("VISA");
		
	}

	@When("user select the Expiry date")
	public void user_select_the_Expiry_date() {
	   
		WebElement month = driver.findElement(By.id("cc_exp_month"));
		Select s = new Select(month);
		s.selectByVisibleText("February");
	}

	@When("user select the Expiry year")
	public void user_select_the_Expiry_year() {
	   
		WebElement year = driver.findElement(By.id("cc_exp_year"));
		Select s = new Select(year);
		s.selectByVisibleText("2021");
	}

	@When("user enter the CVV number{string}")
	public void user_enter_the_CVV_number(String cvvnumber) {
	    
		WebElement cvv = driver.findElement(By.id("cc_cvv"));
		cvv.sendKeys(cvvnumber);
	}
	
	@When("click the book process")
	public void click_the_book_process() {
	    
		WebElement book = driver.findElement(By.id("book_now"));
		book.click();
	}
	
	@When("cancellation step")
	public void cancellation_step() {
	    
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.visibilityOfElementLocated(By.id("my_itinerary")));
		WebElement iti = driver.findElement(By.id("my_itinerary"));
		iti.click();
	}
	
	@When("first step of cancellation")
	public void first_step_of_cancellation() {
	    
		WebElement check = driver.findElement(By.id("check_all"));
		check.click();
	}

	@When("second step of cancellation")
	public void second_step_of_cancellation() {
	    
		WebElement can = driver.findElement(By.name("cancelall"));
		can.click();
		Alert a = driver.switchTo().alert();
		a.accept();	
	}
	
	@Then("page to be displayed")
	public void page_to_be_displayed() throws IOException {
	     
		TakesScreenshot ts = (TakesScreenshot) driver;
		File src = ts.getScreenshotAs(OutputType.FILE);
		File desc = new File("C:\\Users\\dinesh.govindaraj\\eclipse-workspace\\AdanicCucumber\\File\\6.png");
		FileUtils.copyFile(src, desc);
	}

	@Then("logout the account")
	public void logout_the_account() {
	    
		WebElement logout = driver.findElement(By.id("logout"));
		logout.click();
	}

	@Then("quit the browser")
	public void quit_the_browser() {
	    
		driver.quit();
		System.out.println("Test case pass");
	}
}
