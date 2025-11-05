#!/usr/bin/env bash
set -euo pipefail

readonly OUT_DIR="$(dirname "${BASH_SOURCE[0]}")/../public/media"
readonly OUT_VIDEO="${OUT_DIR}/whatsapp-promo.mp4"
readonly FONT_BOLD="/usr/share/fonts/truetype/dejavu/DejaVuSans-Bold.ttf"
readonly FONT_REGULAR="/usr/share/fonts/truetype/dejavu/DejaVuSans.ttf"

mkdir -p "${OUT_DIR}"

echo "Creating background music..."
ffmpeg -y \
  -f lavfi -i "sine=frequency=440:duration=30:sample_rate=44100" \
  -f lavfi -i "sine=frequency=660:duration=30:sample_rate=44100" \
  -filter_complex "[0][1]amix=inputs=2:duration=first:dropout_transition=2,volume=0.35[aout]" \
  -map "[aout]" \
  "${OUT_DIR}/temp-music.mp3"

echo "Rendering video track..."
ffmpeg -y \
  -f lavfi -i color=c=0x0d1b3b:size=1920x1080:duration=30 \
  -filter_complex "\
    drawbox=x=0:y=0:w=1920:h=1080:color=0x102a52@0.4:t=fill,\
    drawbox=x=150:y=120:w=1620:h=840:color=0xffffff@0.07:t=fill,\
    drawtext=fontfile=${FONT_BOLD}:text='Want to reach thousands instantly?':fontcolor=0xffffff:fontsize=96:x=(w-text_w)/2:y=220:enable='between(t,0,4)':alpha='if(lt(t,0.5), (t)/0.5, if(gt(t,3.5),(4-t)/0.5,1))',\
    drawtext=fontfile=${FONT_REGULAR}:text='Send WhatsApp campaigns with a modern, high-converting experience.':fontcolor=0xbfd7ff:fontsize=54:x=(w-text_w)/2:y=350:enable='between(t,0.5,4.5)',\
    drawtext=fontfile=${FONT_BOLD}:text='Send WhatsApp messages for just 20 paisa per message':fontcolor=0xffffff:fontsize=64:x=220:y=450:enable='between(t,4,9)':alpha='if(lt(t,4.5),(t-4)/0.5, if(gt(t,8.5),(9-t)/0.5,1))',\
    drawbox=x=170:y=460:w=20:h=20:color=0x3bd16f@1:enable='between(t,4,9)',\
    drawtext=fontfile=${FONT_BOLD}:text='Send PDFs, Videos, Creative Posts':fontcolor=0xffffff:fontsize=64:x=220:y=540:enable='between(t,6,11)':alpha='if(lt(t,6.5),(t-6)/0.5, if(gt(t,10.5),(11-t)/0.5,1))',\
    drawbox=x=170:y=550:w=20:h=20:color=0x3bd16f@1:enable='between(t,6,11)',\
    drawtext=fontfile=${FONT_BOLD}:text='Include Display Picture (DP) and Push Buttons':fontcolor=0xffffff:fontsize=64:x=220:y=630:enable='between(t,8,13)':alpha='if(lt(t,8.5),(t-8)/0.5, if(gt(t,12.5),(13-t)/0.5,1))',\
    drawbox=x=170:y=640:w=20:h=20:color=0x3bd16f@1:enable='between(t,8,13)',\
    drawtext=fontfile=${FONT_BOLD}:text='Fast delivery and high engagement':fontcolor=0xffffff:fontsize=64:x=220:y=720:enable='between(t,10,15)':alpha='if(lt(t,10.5),(t-10)/0.5, if(gt(t,14.5),(15-t)/0.5,1))',\
    drawbox=x=170:y=730:w=20:h=20:color=0x3bd16f@1:enable='between(t,10,15)',\
    drawbox=x=1180:y=220:w=420:h=700:color=0xffffff@0.15:enable='between(t,4,24)',\
    drawbox=x=1200:y=240:w=380:h=660:color=0x0d1b3b@0.95:enable='between(t,4,24)',\
    drawbox=x=1200:y=240:w=380:h=80:color=0x1e3a70@0.95:enable='between(t,4,24)',\
    drawtext=fontfile=${FONT_BOLD}:text='WhatsApp Campaign':fontcolor=0xffffff:fontsize=40:x=1210:y=265:enable='between(t,4,24)',\
    drawbox=x=1220:y=350:w=320:h=120:color=0x1f8f57@0.85:enable='between(t,5,24)',\
    drawtext=fontfile=${FONT_BOLD}:text='Customer\\: Need pricing':fontcolor=0xffffff:fontsize=34:x=1235:y=365:enable='between(t,5,24)',\
    drawtext=fontfile=${FONT_REGULAR}:text='Sure! Plans start at just 20 paisa/message.':fontcolor=0xeafff5:fontsize=32:x=1235:y=415:enable='between(t,5,24)',\
    drawbox=x=1220:y=490:w=320:h=120:color=0x0f6bb5@0.85:enable='between(t,7,24)',\
    drawtext=fontfile=${FONT_BOLD}:text='You\\: Try our rich media campaigns.':fontcolor=0xffffff:fontsize=34:x=1235:y=505:enable='between(t,7,24)',\
    drawtext=fontfile=${FONT_REGULAR}:text='Send PDFs, videos, and CTAs in one tap.':fontcolor=0xe8f2ff:fontsize=32:x=1235:y=555:enable='between(t,7,24)',\
    drawbox=x=1220:y=630:w=320:h=120:color=0x1f8f57@0.85:enable='between(t,9,24)',\
    drawtext=fontfile=${FONT_BOLD}:text='Customer\\: Amazing, Im in!':fontcolor=0xffffff:fontsize=34:x=1235:y=645:enable='between(t,9,24)',\
    drawtext=fontfile=${FONT_REGULAR}:text='Lets launch the campaign right now.':fontcolor=0xeafff5:fontsize=32:x=1235:y=695:enable='between(t,9,24)',\
    drawbox=x=470:y=800:w=980:h=120:color=0xffffff@0.15:enable='between(t,15,26)',\
    drawtext=fontfile=${FONT_BOLD}:text='Try It Now!':fontcolor=0xffffff:fontsize=84:x=500:y=825:enable='between(t,15,28)':alpha='if(lt(t,15.5),(t-15)/0.5, if(gt(t,27.5),(28-t)/0.5,1))',\
    drawtext=fontfile=${FONT_BOLD}:text='+91 8280527451':fontcolor=0x7cc2ff:fontsize=72:x=900:y=835:enable='between(t,15,28)',\
    drawtext=fontfile=${FONT_REGULAR}:text='Reach thousands on WhatsApp instantly! Try it now!':fontcolor=0xffffff:fontsize=70:x=(w-text_w)/2:y=930:enable='between(t,24,30)':alpha='if(lt(t,24.5),(t-24)/0.5, if(gt(t,29.5),(30-t)/0.5,1))'\
  " \
  -c:v libx264 -pix_fmt yuv420p \
  "${OUT_DIR}/temp-video.mp4"

echo "Merging audio and video..."
ffmpeg -y \
  -i "${OUT_DIR}/temp-video.mp4" \
  -i "${OUT_DIR}/temp-music.mp3" \
  -c:v copy -c:a aac -shortest \
  "${OUT_VIDEO}"

rm "${OUT_DIR}/temp-video.mp4" "${OUT_DIR}/temp-music.mp3"

echo "Generated ${OUT_VIDEO}"
