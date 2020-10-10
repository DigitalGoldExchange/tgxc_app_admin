package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class AdminController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/admin/adminInfo", method = RequestMethod.GET)
    public ModelAndView manageInfo(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/admin/adminInfo");
        return mav;
    }

    @RequestMapping(value = "/admin/adminInfoDetail", method = RequestMethod.GET)
    public ModelAndView manageInfoDetail(ModelAndView mav, @RequestParam("level") String level, @RequestParam("userId") String userId ) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("level",level);
        mav.addObject("userId",userId);
        mav.setViewName("/admin/adminInfoDetail");
        return mav;
    }

    @RequestMapping(value = "/admin/adminUpdate", method = RequestMethod.GET)
    public ModelAndView adminUpdate(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/admin/adminUpdate");
        return mav;
    }

    @RequestMapping(value = "/admin/adminAdd", method = RequestMethod.GET)
    public ModelAndView adminAdd(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/admin/adminAdd");
        return mav;
    }
}
