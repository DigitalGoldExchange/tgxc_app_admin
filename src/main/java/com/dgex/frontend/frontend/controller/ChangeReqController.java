package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class ChangeReqController {

    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/change/changeReq", method = RequestMethod.GET)
    public ModelAndView changeReq(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/change/changeReq");
        return mav;
    }

    @RequestMapping(value = "/change/changeReqDetail", method = RequestMethod.GET)
    public ModelAndView changeReqDetail(ModelAndView mav, @RequestParam("exchangeId") String exchangeId) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("exchangeId",exchangeId);
        mav.setViewName("/change/changeReqDetail");
        return mav;
    }
}
