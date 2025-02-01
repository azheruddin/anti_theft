package com.mobilesafeapp

import android.app.admin.DeviceAdminReceiver
import android.content.Context
import android.content.Intent
import android.media.MediaPlayer
import android.util.Log
import android.widget.Toast

class MyDeviceAdminReceiver : DeviceAdminReceiver() {

    private var wrongAttemptCount = 0 // Variable to track wrong attempts
    private var mediaPlayer: MediaPlayer? = null // MediaPlayer for siren

    override fun onEnabled(context: Context, intent: Intent) {
        // When Device Admin is enabled
        Toast.makeText(context, "Device Admin Enabled", Toast.LENGTH_SHORT).show()
        Log.d("DeviceAdmin", "Device Admin Enabled")  // Log for enabling Device Admin
    }

    override fun onDisabled(context: Context, intent: Intent) {
        // When Device Admin is disabled
        Toast.makeText(context, "Device Admin Disabled", Toast.LENGTH_SHORT).show()
        Log.d("DeviceAdmin", "Device Admin Disabled")  // Log for disabling Device Admin
    }

    override fun onPasswordFailed(context: Context, intent: Intent) {
        super.onPasswordFailed(context, intent)
        wrongAttemptCount++ // Incrementing wrong attempt count
        Log.d("DeviceAdmin", "Wrong attempt count: $wrongAttemptCount") // Log the wrong attempt count

        // Show toast with current count of wrong attempts
        Toast.makeText(context, "Wrong Password Attempt $wrongAttemptCount", Toast.LENGTH_SHORT).show()

        // If there have been 3 wrong attempts, trigger the siren
        if (wrongAttemptCount >= 3) {
            triggerSiren(context)  // Trigger the siren sound
        }
    }

    override fun onPasswordSucceeded(context: Context, intent: Intent) {
        super.onPasswordSucceeded(context, intent)
        wrongAttemptCount = 0 // Resetting the wrong attempt counter to 0 on correct password
        stopSiren() // Stop the siren if it's still playing

        Log.d("DeviceAdmin", "Password successfully entered")
        Toast.makeText(context, "Password Successfully Entered", Toast.LENGTH_SHORT).show()
    }

    private fun triggerSiren(context: Context) {
        Log.d("DeviceAdmin", "Siren triggered")  // Log when siren is triggered
        
        // Initialize and start MediaPlayer for siren sound
        if (mediaPlayer == null) {
            mediaPlayer = MediaPlayer.create(context, R.raw.sound)  // Reference the correct sound file
        }
        mediaPlayer?.start()  // Start the siren sound
    }

    private fun stopSiren() {
        Log.d("DeviceAdmin", "Stopping Siren") // Log for stopping siren
        
        // Stop and release MediaPlayer resources
        mediaPlayer?.stop()
        mediaPlayer?.release()
        mediaPlayer = null
    }
}
