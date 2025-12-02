'use client';

import React from "react";
import { Box, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";

const EventBox = ({ id , isMobile, isParticularPage , EventName, description, time , image }) => {
  const router = useRouter();
  const { theme } = useSelector((s) => s.theme || { theme: 'light' });
  const padding = isMobile ? 2 : 6;
  const titleFontSize = isMobile ? '1.4rem' : '5.4rem';
  const titleParticularFontSize = isMobile ? '0.8rem' : '3.2rem' ;
  const bodyFontSize = isMobile ? '0.22rem' : '0.95rem';

  const containerHeight = isMobile ? 220 : 500;
  const containerWidth = isMobile ? '100%' : '100%';
  const bgColor = theme === 'dark' ? '#272F4E' : '#F4F4F4';
  const bgColorParticular = theme === 'dark' ? '#272F4E' : '#FFFFFF' ;
  const textColor = theme === 'dark' ? '#E6E9F2' : '#111';
  const titleColor = 'linear-gradient(180deg, #00ADCF 0%, #00D20B 46.35%, #047500 100%)';

  const isClickable = !isParticularPage; 
  const handleNavigate = (e) => {
    if (!isClickable) return;
    router.push(`/events/ParticularEvent/${id}`);
  };
  
  const handleKeyDown = (e) => {
    if (!isClickable) return;
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleNavigate();
    }
  };

  return (
    <Box
      onClick={isClickable ? handleNavigate : undefined}
      onKeyDown={isClickable ? handleKeyDown : undefined}
      role={isClickable ? 'button' : undefined}
      tabIndex={isClickable ? 0 : undefined}
      sx={{
        position: 'relative',                    
        '--pad': `${padding * 8}px`,             
        display: "flex",
        alignItems: "center",
        height: containerHeight,
        width: containerWidth,
        borderRadius: isParticularPage? 0 : isMobile ? '28px' : '50px',
        bgcolor:  isParticularPage ? bgColorParticular : bgColor,
        overflow: 'hidden',
        borderBottom: theme === 'dark' ? '0.98px solid #363F5F' : '0.23px solid #CECECE',
        px: 'var(--pad)',                       
        py: isMobile ? 2 : 4,
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          flex: 1,
          position: 'static',
          display: 'flex',
          justifyContent: isMobile ? 'center' : 'flex-end',
          alignItems: 'start',
          height: '100%',
        }}
      >
        <svg width="0" height="0">
          <defs>
            <clipPath id="eventCurveMask" clipPathUnits="objectBoundingBox">
              {(isMobile ? <path
                d="
                  M 0 0.6
                  C 0.8 0.1, 0.0 0, 1 0.1
                  L 1 1
                  L 0 1
                  Z 
                "
              /> : 
              <path
                d="
                  M 0 0.6
                  C 0.6 0.0, 0.0 0, 1 0
                  L 1 1
                  L 0 1
                  Z 
                "
              />
              )}
            </clipPath>
          </defs>
        </svg>
        <Box
          component="img"
          src={image || '/GreenEvent.jpg'}
          alt="event banner"
          sx={{
            position: 'absolute',
            top: 'calc(-1 * var(--pad))',    
            right: 'calc(-1 * var(--pad))',  
            height: isMobile ? '80%' : '90%' ,
            width: '60%',
            maxWidth: isMobile ? '92%' : '90%',
            objectFit: 'cover',
            transform: isMobile ? 'scale(0.95)' : 'scale(1)',
            filter: theme === 'dark' ? 'brightness(0.9)' : 'none',
            clipPath: 'url(#eventCurveMask)',
            WebkitClipPath: 'url(#eventCurveMask)',
            zIndex: 0,
          }}
        />
        <Box
          component="img"
          src="/eventgreencard.png"
          alt="event card"
          loading="lazy"
          sx={{
            position: 'absolute',
            right: isMobile ? '8%' : '23%',
            bottom: isMobile ? '10%' : '-5%',
            width: isMobile ? '60%' : '43%',
            maxWidth: isMobile ? '80%' : '70%',
            height: 'auto',
            borderRadius: 2,
            transform: 'scaleX(-1)',
            zIndex: 1,
          }}
        />
      </Box>
      <Box
        sx={{
          width: '50%',
          minWidth: isMobile ? '50%' : 200,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
          pr: 4,
          boxSizing: 'border-box',
          height: '100%', 
        }}
      >
        <Box
          sx={{
            flexBasis: '50%',
            height: '40%',
            display: 'flex',
            alignItems: 'center',    
            justifyContent: 'flex-start', 
            boxSizing: 'border-box',
            mr :isMobile ? 0 :20
          }}
        >
          <Typography
            component="h1"
            sx={{
              fontWeight: 800,
              fontSize: isParticularPage? titleParticularFontSize : titleFontSize,
              color: titleColor,
              lineHeight: 1.32,
              textAlign: 'right',    
              display: 'block',
              width: '100%',
            }}
          >
            {!isParticularPage && (EventName || 'رویداد سبزتازان')}
            {isParticularPage && (` به ${EventName} خوش امدید`)}
          </Typography>
        </Box>
        <Box
          sx={{
            flexBasis: '50%',
            height: '50%',
            display: 'flex',
            alignItems: 'flex-start',   
            flexDirection: 'column',
            justifyContent: 'flex-start',
            pt: isMobile ? 1 : 5,       
            px: isMobile ? 1.5 : 0,     
            boxSizing: 'border-box',
            gap: isMobile ? 4 : 2,
          }}
        >
          <Typography
            component="p"
            sx={{
              color: textColor,
              fontSize: bodyFontSize,
              maxWidth: isMobile ? '85%' : '100%',
              textAlign: 'justify-end',       
              display: 'block',
              mr :isMobile ? 10 :60
            }}
          >
            {description || 'این رویداد برای انتخاب بهترین ماشینِ سبز رنگ برگزار شده. میتونی هم جزو برنده‌ها باشی یا انتخاب برنده سهمت باشه!'}
          </Typography>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              justifyContent: 'flex-end',
              mt: isMobile ? 2 : 5,      
              boxSizing: 'border-box',
            }}
          >
            <Box
              sx={{
                backgroundColor: theme === 'dark' ? '#1f2430' : '#fff',
                color: theme === 'dark' ? '#E6E9F2' : '#111',
                borderRadius: 3,
                px: isMobile ? 3 : 4,
                py: isMobile ? 1.5 : 2,
                boxShadow: theme === 'dark' ? '0 6px 18px rgba(0,0,0,0.35)' : '0 6px 18px rgba(0,0,0,0.08)',
                textAlign: 'center',
                minWidth: isMobile ? '80%' : 300, 
                maxWidth: isMobile ? '92%' : '80%',
                ml :isMobile ? 0 : 15
              }}
            >
              <Typography sx={{ fontSize: isMobile ? '7px' : '22px', fontWeight: 800 }}>
                {time || '15 روز و 12 ساعت و 45 دقیقه'}
              </Typography>
              <Typography variant="caption" sx={{ fontSize: isMobile ? '5px' : '12px', display: 'block', color: '#777', mt: 1 }}>
                تا اتمام رویداد
              </Typography>
            </Box>
          </Box>
          {isParticularPage && (
            <Box
              sx={{
                width :  isMobile ? '40%' :'80%' ,
                display : 'flex' ,
                justifyItems : 'center',
                justifyContent : 'flex-end',
                alignItems: 'center',
                mr : isMobile ? 13.5 : 6 ,
              }}
            >
              <Box
                sx={{
                  width :  isMobile ?'100%' : '40%',
                  height : isMobile ? '40%' : '60%' ,
                  mt : isMobile ? -4 : 2 ,
                  backgroundColor : '#2A78ED',
                  border: '1px solid var(--Miscellaneous-Sidebar-Text---Selected, #0088FF)',
                  alignItems: 'center',
                  display : 'flex' ,
                  justifyContent : 'center' ,
                  justifyItems : 'center' ,
                  py : 2 ,
                  borderRadius : 0.5
                }}
              >
                <Typography sx={{ fontSize : isMobile ? '0.5rem' : '1rem' ,}}>
                  ثبت نام
                </Typography>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Box>
  );
}
export default EventBox;
