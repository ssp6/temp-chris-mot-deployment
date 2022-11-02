// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  name: string
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).json([{
    "registration": "SM58DHE",
    "make": "VOLKSWAGEN",
    "model": "GOLF",
    "firstUsedDate": "2008.12.19",
    "fuelType": "Diesel",
    "primaryColour": "Blue",
    "motTestExpiryDate": "2023-01-15",
    "motTests": [{
      "completedDate": "2022.04.05 16:08:28",
      "testResult": "PASSED",
      "expiryDate": "2023.04.06",
      "odometerValue": "131220",
      "odometerUnit": "mi",
      "motTestNumber": "697406076836",
      "rfrAndComments": [],
    }, {
      "completedDate": "2022.04.04 11:18:45",
      "testResult": "FAILED",
      "odometerValue": "131218",
      "odometerUnit": "mi",
      "motTestNumber": "942718138283",
      "rfrAndComments": [{
        "text": "Offside Headlamp aim projected beam image is obviously incorrect (4.1.2 (c))",
        "type": "FAIL",
      }, { "text": "Nearside Parking brake inoperative on one side (1.4.1 (a))", "type": "FAIL" }, {
        "text": "Parking brake efficiency below requirements (1.4.2 (a) (i))",
        "type": "FAIL",
      }, { "text": "Bonnet cannot be secured in the closed position (3.1 (b) (i))", "type": "FAIL" }, {
        "text": "Offside Rear Coil spring fractured or broken (5.3.1 (b) (i))",
        "type": "FAIL",
      }, { "text": "Offside Parking brake inoperative on one side (1.4.1 (a))", "type": "FAIL" }, {
        "text": "Offside Front Tyre worn close to legal limit/worn on edge (5.2.3 (e))",
        "type": "ADVISORY",
      }, { "text": "Nearside Rear Other passenger door cannot be opened from outside the vehicle (6.2.3 (a))", "type": "FAIL" }],
    }, {
      "completedDate": "2021.03.31 17:40:13",
      "testResult": "PASSED",
      "expiryDate": "2022.04.06",
      "odometerValue": "120700",
      "odometerUnit": "mi",
      "motTestNumber": "649627871880",
      "rfrAndComments": [],
    }, {
      "completedDate": "2020.04.07 13:54:14",
      "testResult": "PASSED",
      "expiryDate": "2021.04.06",
      "odometerValue": "108032",
      "odometerUnit": "mi",
      "motTestNumber": "398477138563",
      "rfrAndComments": [{ "text": "Windscreen damaged but not adversely affecting driver's view (3.2 (a) (i))", "type": "MINOR" }, {
        "text": "parking brake effort low for this car",
        "type": "ADVISORY",
      }],
    }, {
      "completedDate": "2020.04.07 08:19:48",
      "testResult": "FAILED",
      "odometerValue": "108032",
      "odometerUnit": "mi",
      "motTestNumber": "547037254942",
      "rfrAndComments": [{
        "text": "Offside Registration plate lamp inoperative in the case of multiple lamps or light sources (4.7.1 (b) (i))",
        "type": "MINOR",
      }, {
        "text": "Nearside Front Brake disc significantly and obviously worn (1.1.14 (a) (i))",
        "type": "FAIL",
      }, { "text": "Windscreen damaged but not adversely affecting driver's view (3.2 (a) (i))", "type": "MINOR" }, {
        "text": "parking brake effort low for this car",
        "type": "ADVISORY",
      }, { "text": "Offside Front Position lamp not working (4.2.1 (a) (ii))", "type": "FAIL" }],
    }, {
      "completedDate": "2018.12.18 15:36:12",
      "testResult": "PASSED",
      "expiryDate": "2019.12.27",
      "odometerValue": "99822",
      "odometerUnit": "mi",
      "motTestNumber": "111121595763",
      "rfrAndComments": [{ "text": "Windscreen damaged but not adversely affecting driver's view (3.2 (a) (i))", "type": "MINOR" }],
    }, {
      "completedDate": "2018.12.17 10:47:40",
      "testResult": "FAILED",
      "odometerValue": "99817",
      "odometerUnit": "mi",
      "motTestNumber": "485171671444",
      "rfrAndComments": [{
        "text": "Nearside Outer Drive shaft joint constant velocity boot split or insecure, no longer prevents the ingress of dirt  split (6.1.7 (g) (ii))",
        "type": "FAIL",
      }, { "text": "Offside Front Coil spring fractured or broken (5.3.1 (b) (i))", "type": "FAIL" }, {
        "text": "Parking brake efficiency below requirements (1.4.2 (a) (i))",
        "type": "FAIL",
      }, { "text": "Offside Rear Tyre tread depth below requirements of 1.6mm (5.2.3 (e))", "type": "FAIL" }, {
        "text": "Offside Side repeater not working (4.4.1 (a) (ii))",
        "type": "FAIL",
      }, { "text": "Nearside Front Coil spring fractured or broken (5.3.1 (b) (i))", "type": "FAIL" }, {
        "text": "Offside Rear Service brake excessively fluctuating (1.2.1 (e))",
        "type": "FAIL",
      }, { "text": "Windscreen damaged but not adversely affecting driver's view (3.2 (a) (i))", "type": "MINOR" }],
    }, {
      "completedDate": "2017.12.28 09:53:58",
      "testResult": "PASSED",
      "expiryDate": "2018.12.27",
      "odometerValue": "94736",
      "odometerUnit": "mi",
      "motTestNumber": "223883848501",
      "rfrAndComments": [{ "text": "Nearside Front Front constant velocity joint gaiter deteriorated, but preventing the ingress of dirt (2.5.C.1a)", "type": "ADVISORY" }],
    }, {
      "completedDate": "2017.12.28 09:53:57",
      "testResult": "FAILED",
      "odometerValue": "94736",
      "odometerUnit": "mi",
      "motTestNumber": "296839302859",
      "rfrAndComments": [{
        "text": "Nearside Rear Stop lamp not working (1.2.1b)",
        "type": "PRS",
      }, { "text": "Nearside Front Front constant velocity joint gaiter deteriorated, but preventing the ingress of dirt (2.5.C.1a)", "type": "ADVISORY" }],
    }, {
      "completedDate": "2016.12.03 13:38:22",
      "testResult": "PASSED",
      "expiryDate": "2017.12.19",
      "odometerValue": "90104",
      "odometerUnit": "mi",
      "motTestNumber": "868575606791",
      "rfrAndComments": [{ "text": "Nearside Front Outer Front constant velocity joint gaiter damaged, but preventing the ingress of dirt (2.5.C.1a)", "type": "ADVISORY" }],
    }, {
      "completedDate": "2016.11.28 12:37:22",
      "testResult": "FAILED",
      "odometerValue": "90052",
      "odometerUnit": "mi",
      "motTestNumber": "609220896871",
      "rfrAndComments": [{
        "text": "offside front outer tyre showing signs of perishing",
        "type": "ADVISORY",
      }, {
        "text": "Nearside Front Outer Front constant velocity joint gaiter damaged, but preventing the ingress of dirt (2.5.C.1a)",
        "type": "ADVISORY",
      }, { "text": "Central Front Exhaust system not adequately supported (7.1.1)", "type": "FAIL" }],
    }, {
      "completedDate": "2015.12.19 08:55:03",
      "testResult": "PASSED",
      "expiryDate": "2016.12.19",
      "odometerValue": "84583",
      "odometerUnit": "mi",
      "motTestNumber": "540737594497",
      "rfrAndComments": [],
    }, {
      "completedDate": "2014.12.16 14:40:24",
      "testResult": "PASSED",
      "expiryDate": "2015.12.19",
      "odometerValue": "73446",
      "odometerUnit": "mi",
      "motTestNumber": "667900854306",
      "rfrAndComments": [{ "text": "Windscreen has damage to an area less than a 10mm circle within zone 'A' (8.3.1a)", "type": "ADVISORY" }],
    }, {
      "completedDate": "2014.12.16 14:40:24",
      "testResult": "FAILED",
      "odometerValue": "73446",
      "odometerUnit": "mi",
      "motTestNumber": "347050654307",
      "rfrAndComments": [{
        "text": "Offside Windscreen washer provides insufficient washer liquid (8.2.3)",
        "type": "PRS",
      }, {
        "text": "Windscreen has damage to an area less than a 10mm circle within zone 'A' (8.3.1a)",
        "type": "ADVISORY",
      }, { "text": "Nearside Windscreen washer provides insufficient washer liquid (8.2.3)", "type": "PRS" }],
    }, {
      "completedDate": "2013.12.17 11:27:36",
      "testResult": "PASSED",
      "expiryDate": "2014.12.19",
      "odometerValue": "60998",
      "odometerUnit": "mi",
      "motTestNumber": "598651953384",
      "rfrAndComments": [],
    }, {
      "completedDate": "2013.12.16 17:17:00",
      "testResult": "FAILED",
      "odometerValue": "60998",
      "odometerUnit": "mi",
      "motTestNumber": "657040053392",
      "rfrAndComments": [{
        "text": "Offside Windscreen washer provides insufficient washer liquid (8.2.3)",
        "type": "FAIL",
      }, { "text": "Offside Windscreen wiper does not clear the windscreen effectively (8.2.2)", "type": "FAIL" }, {
        "text": "Supplementary Restraint System warning lamp indicates a fault (5.4.2)",
        "type": "FAIL",
      }, { "text": "Offside Front position lamp(s) not working (1.1.A.3b)", "type": "FAIL" }, {
        "text": "Nearside Windscreen washer provides insufficient washer liquid (8.2.3)",
        "type": "FAIL",
      }, { "text": "Nearside Windscreen wiper does not clear the windscreen effectively (8.2.2)", "type": "FAIL" }],
    }, {
      "completedDate": "2012.12.05 15:22:41",
      "testResult": "PASSED",
      "expiryDate": "2013.12.19",
      "odometerValue": "51183",
      "odometerUnit": "mi",
      "motTestNumber": "665060642339",
      "rfrAndComments": [],
    }, {
      "completedDate": "2011.12.05 11:19:06",
      "testResult": "PASSED",
      "expiryDate": "2012.12.19",
      "odometerValue": "40168",
      "odometerUnit": "mi",
      "motTestNumber": "387799031311",
      "rfrAndComments": [{ "text": "Nail in offside front tyre", "type": "USER ENTERED" }, { "text": "Front wipers torn slightly", "type": "USER ENTERED" }, {
        "text": "Nail in offside rear tyre",
        "type": "USER ENTERED",
      }],
    }],
  }])
}
