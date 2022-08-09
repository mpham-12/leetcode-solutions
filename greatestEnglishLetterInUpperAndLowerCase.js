/**
 * @param {string} s
 * @return {string}
 */
var greatestLetter = function(s) {
  const sortChars = s.split('').sort((a, b) => a.localeCompare(b));

  const duplicates = sortChars.filter(char => s.includes(char.toUpperCase()) && s.includes(char.toLowerCase()));

  if (duplicates.length) {
    return duplicates[duplicates.length - 1];
  } else {
    return ''
  }

};

console.log(greatestLetter("lEeTcOdE"))
console.log(greatestLetter("arRAzFif"))
console.log(greatestLetter("AbCdEfGhIjK"))
console.log(greatestLetter("EtaJrJnREOEaurJiCrwnMbUFElllBiCEKbTpbxKUfMVGkBPfrIyOljQQRsVjHqzgAGRQUjoymVNtWKwaylLGiATlpogDvzOqvkpoCpAsFaRNoZlBPygruHhPPqaCHAZzBCcLqAAxxCWrznQpmOMhcqpWIsdKXRiMQTXQBmfPhavhFtUHEVOGHtpisJUVhYvFYvhCChqzwyNXfVPIWpQAdPXttDurohPkjXgaETvoCJQmFpVSoYgOMwxZPniKDmvDEoSxLEIHacAageesFOfXyBwiGIrhxgqKjEKbqpONKEkwlyQxlbMzdEYORwXwAqbnDcaijrVuEvtqjDUWiNCgBLYyNRPIrAkRACFtyzBvDpqJbuZhNlVPWpmKfxeuxIMFgtKZSsXJBCFkgybAKLLouWBFNIacSwvxRKcFUOVzrOcLCCnmHIHUDoVzAJTnZLtjdCHIrmpylnOZQaXwIYXARFbpVMnGiFhgZNcfEjAyPXUPPfKeCbuKQndqHQFCIwmDxeADMdidDusoRVPHUQHTsesjnshnvrUstvyrUuVfhsNVukFuhtibcAhwljaoBQUIrBlVukJorxmjmvJbjqOYycWuiairqSCPtzCYesqMnEaKcmXGeaspjWOcpYgsPakeMRhIUyjEMyIzgHLHSwwbDmOfpVkGFYsVakurdxllEzXkUtUCDYQrRNXEJihyheicfPyShXJDlnFpgMyhdlouubKPsBDETQKoUzDfJuBgOVkwzflYihhKgjzTNtlDUqxBcRCbDVMYFbESsQzLeLMTbBdtDAdzYZiHgnXagkUfGbGMPrwXVhAWWJudUDSFyDhJRmrulylFNdsLSvHnSYmIPwDncowYlfrSoQRbbDLPmzSfbtYmZPndnMjvuTBcSWNegdTCIPYehqkrpGocrWeBOUyjUPMuZPDqJxCbVihdrVYeYiITFKsuPVuuplSIMCcRSekydnEeNrXKjAQoicZMfrkMSEaTevwBpTqmKwzv"))