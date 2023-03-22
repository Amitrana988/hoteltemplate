/*
=======================================================================
    Countdown clock js Library
=======================================================================
* downCount: Simple Countdown clock with offset
* Author: Sonny T. <hi@sonnyt.com>, sonnyt.com
*/
!function(e){e.fn.downCount=function(t,n){var r=e.extend({date:null,offset:null},t);r.date||e.error("Date is not defined."),Date.parse(r.date)||e.error("Incorrect date format, it should look like this, 12/24/2012 12:00:00.");var o=this,f=function(){var e=new Date,t=e.getTime()+6e4*e.getTimezoneOffset();return new Date(t+36e5*r.offset)};var i=setInterval(function(){var e=new Date(r.date)-f();if(e<0)return clearInterval(i),void(n&&"function"==typeof n&&n());var t=36e5,a=Math.floor(e/864e5),d=Math.floor(e%864e5/t),s=Math.floor(e%t/6e4),u=Math.floor(e%6e4/1e3),l=1===(a=String(a).length>=2?a:"0"+a)?"day":"days",h=1===(d=String(d).length>=2?d:"0"+d)?"hour":"hours",c=1===(s=String(s).length>=2?s:"0"+s)?"minute":"minutes",g=1===(u=String(u).length>=2?u:"0"+u)?"second":"seconds";o.find(".days").text(a),o.find(".hours").text(d),o.find(".minutes").text(s),o.find(".seconds").text(u),o.find(".days_ref").text(l),o.find(".hours_ref").text(h),o.find(".minutes_ref").text(c),o.find(".seconds_ref").text(g)},1e3)}}(jQuery);
