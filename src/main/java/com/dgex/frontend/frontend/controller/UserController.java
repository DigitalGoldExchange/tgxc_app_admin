package com.dgex.frontend.frontend.controller;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.ModelAndView;

@Controller
public class UserController {
    @Value("${api.url}")
    private String apiAddress;

    @RequestMapping(value = "/user/userList", method = RequestMethod.GET)
    public ModelAndView userList(ModelAndView mav) {
        mav.addObject("apiAddress",apiAddress);
        mav.setViewName("/user/userList");
        return mav;
    }

    @RequestMapping(value = "/user/userDetail", method = RequestMethod.GET)
    public ModelAndView userDetail(ModelAndView mav,@RequestParam("userId") String userId) {
        mav.addObject("apiAddress",apiAddress);
        mav.addObject("userId",userId);
        mav.setViewName("/user/userDetail");
        return mav;
    }
}
