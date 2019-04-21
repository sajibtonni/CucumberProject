package steps_definition;

import java.io.File;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.chrome.ChromeOptions;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {

	public static WebDriver driver;
//	public static UI ui;
	public static ChromeOptions chromeOptions;
//	public static ChromeDriver obj;

	@Before
	public void openBrowser() {
//		System.setProperty("webdriver.chrome.driver", System.getProperty("user.dir") + "\\lib\\chromedriver.exe");
		System.setProperty("webdriver.chrome.driver", "C:\\Users\\nezam\\eclipse-workspace\\CucumberProject\\lib\\chromedriver.exe");
		driver = new ChromeDriver();

//		ChromeOptions chromeOptions = new ChromeOptions();
//		chromeOptions.addExtensions(new File(System.getProperty("\\lib\\Xpath-Finder_v1.6.0.exe")));
//		driver=new ChromeDriver(chromeOptions);

		driver.manage().timeouts().implicitlyWait(30, TimeUnit.SECONDS);
		driver.manage().window().maximize();

	}

/*	@After
	public void closeBrowser() {

		driver.close();
		driver.quit();
	}*/

}
