package com.mobilesafeapp

import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.telephony.SmsMessage
import android.util.Log
import com.mobilesafeapp.MainActivity // Ensure correct import

class SMSReceiver : BroadcastReceiver() {

    override fun onReceive(context: Context, intent: Intent) {
        if (intent.action.equals("android.provider.Telephony.SMS_RECEIVED")) {
            val bundle = intent.extras
            if (bundle != null) {
                val pdus = bundle.get("pdus") as? Array<*>
                val messages = pdus?.mapNotNull {
                    SmsMessage.createFromPdu(it as ByteArray)
                }

                messages?.forEach { message ->
                    val messageBody = message.messageBody?.trim() ?: ""

                    Log.d("SMSReceiver", "Message received: $messageBody")

                    if (messageBody == "FRing") {
                        playSirenSound(context)
                        openReactNativeScreen(context)
                    }
                }
            }
        }
    }

    private fun playSirenSound(context: Context) {
        try {
            val mediaPlayer = MediaPlayer.create(context, R.raw.sound)
            mediaPlayer.isLooping = true
            mediaPlayer.start()
        } catch (e: Exception) {
            e.printStackTrace()
            Log.e("SMSReceiver", "Error playing siren sound: ${e.message}")
        }
    }

    private fun openReactNativeScreen(context: Context) {
        val intent = Intent(context, MainActivity::class.java).apply {
            addFlags(Intent.FLAG_ACTIVITY_NEW_TASK) // Open screen in a new task
            putExtra("screen", "Hello") // Send parameter to React Native
        }
        context.startActivity(intent)
    }
}
