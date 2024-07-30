import { TOTP } from 'totp-generator';
import axios, { AxiosInstance } from 'axios';

/**
 * Creates an Axios instance with custom headers.
 * @summary VRChat API Header
 * @param {string} customHeader - Custom header for the requests. Format: [name]/1.0.0.0 [email]
 * @returns {AxiosInstance} - Axios instance with the specified headers
 */
export function VRChatHead(customHeader: string): AxiosInstance {
    const headersInstance: AxiosInstance = axios.create({
        headers: {
            'User-Agent': customHeader
        }
    });

    return headersInstance;
}

/**
 * Generates a TOTP token for 2FA verification.
 * @param {string} base32 - Base32 string from the TOTP setup.
 * @returns {{code: string, duration: number}} - Object containing the OTP and its duration
 */
export function GenerateTOTP(base32: string): { code: string, duration: number } {
    const { otp, expires } = TOTP.generate(base32);
    return {
        code: otp,
        duration: expires
    };
}