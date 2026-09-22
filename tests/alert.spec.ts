import {test} from "@playwright/test"

test ('learn alert', async ({page})=>{

    await page.goto("https://www.leafground.com/alert.xhtml")
    //playwright event listerner if no dialogue is present all diaplogue are deafultly dismissed

    page.on('dialog',async(alert)=>{
    //page.on is an event lister to listen to user interaction like click or ca[pture thr alert
    //alert is a local that capture simple alert object

    const message = alert.message()
    console.log(message);
    
    const alertType = alert.type()
    console.log(alertType)

    if(alertType=== 'prompt')
        {
            await alert.accept("Testleaf")
        }
        else  if(alertType === 'confirm')
        {
            await alert.accept()
        } else
        {
            await alert.dismiss()
        }
       

    })
    await page.locator("(//span[text()='Show'])[1]").click()
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[2]").click()
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[5]").click()
    await page.waitForTimeout(3000)

    // await page.locator("(//span[text()='Show'])[3]").click()
    // await page.waitForTimeout(3000)

    // await page.locator("(//span[text()='Show'])[4]").click()
    // await page.waitForTimeout(3000)

    //  await page.locator("(//span[text()='Show'])[6]").click()
    // await page.waitForTimeout(3000)
})
test.only('Learn to handle alert',async({page})=>{
    await page.goto('https://leafground.com/alert.xhtml')
    page.once('dialog',async(alert)=>{
        //page.on is an event listner to listen for user interactions like click to capture the alert
        // alert is local variable that captures the simple alert object

        const message = alert.message()
        console.log(message);

        const alertType = alert.type()
        console.log(alertType);
        
        if(alertType === 'prompt'){
            await alert.accept('Testleaf')
        }else if(alertType === 'confirm'){
            await alert.accept() // to click ok button to accept the alert
        }else{
            await alert.dismiss() // to clcik cancel button
        }
    })

    await page.locator("(//span[text()='Show'])[1]").click() // simple alet click event to invoke an alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[2]").click()//confirm alert
    await page.waitForTimeout(3000)

    await page.locator("(//span[text()='Show'])[5]").click()//promptalert
    await page.waitForTimeout(3000)
})